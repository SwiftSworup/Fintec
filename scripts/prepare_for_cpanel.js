const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const srcDir = path.join(root, 'out');
const dstDir = path.join(root, 'out_cpanel');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function walkDir(dir, cb) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const full = path.join(dir, dirent.name);
    if (dirent.isDirectory()) walkDir(full, cb);
    else cb(full);
  });
}

// Remove existing destination
if (fs.existsSync(dstDir)) {
  console.log('Removing existing', dstDir);
  fs.rmSync(dstDir, { recursive: true, force: true });
}

console.log('Copying out -> out_cpanel');
copyRecursiveSync(srcDir, dstDir);

// Replace absolute asset paths in HTML files so they work when folder is not the site root.
// We'll make these changes conservative:
// - Replace src="/ with src="./ (but not src="//...)
// - Replace href="/ with href="./ (but not href="//...)
// - Also replace occurrences like "\/_next and '/_next and "/images etc

console.log('Processing HTML files to make asset paths relative...');
walkDir(dstDir, (file) => {
  if (!file.endsWith('.html')) return;
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Replace src=/ and href=/ (but avoid protocol-relative // and avoid ../ or ./ already)
  content = content.replace(/(src|href)=(\s*)(["']?)\/(?![\/\s\>\"'])/gi, (m, attr, ws, quote) => {
    const q = quote || '"';
    return `${attr}=${ws}${q}./`;
  });

  // Replace occurrences inside JS strings like "/_next or '/_next
  content = content.replace(/(["'])\/_next/g, "$1./_next");
  content = content.replace(/(["'])\/_next/g, "$1./_next");
  content = content.replace(/(["'])\/images/g, "$1./images");
  content = content.replace(/(["'])\/favicon.ico/g, "$1./favicon.ico");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Patched', path.relative(dstDir, file));
  }
});

console.log('Done. Created', dstDir);
console.log('You can now zip `out_cpanel` and upload to cPanel.');
