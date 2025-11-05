const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'out_cpanel');
if (!fs.existsSync(root)) {
  console.error('out_cpanel folder not found:', root);
  process.exit(1);
}

const exts = new Set(['.html', '.js', '.css', '.json', '.txt', '.map']);

function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) walk(full);
    else {
      const ext = path.extname(name.name).toLowerCase();
      if (!exts.has(ext)) continue;
      let content = fs.readFileSync(full, 'utf8');
      const original = content;

      // Replace absolute paths with relative ones
      // 1) quoted occurrences: "/_next/..." or '/_next/...'
      content = content.replace(/(["'])\/_(next\/)/g, '$1./_$2');
      // 2) unquoted occurrences like /_next/static/...
      content = content.replace(/(?<!:)\/(_next\/)/g, './_$1');

      // images
      content = content.replace(/(["'])\/images\//g, "$1./images/");
      content = content.replace(/(?<!:)\/images\//g, './images/');

      // favicon
      content = content.replace(/(["'])\/favicon.ico/g, "$1./favicon.ico");
      content = content.replace(/(?<!:)\/favicon.ico/g, './favicon.ico');

      // _next/data JSON paths
      content = content.replace(/(["'])\/(_next\/data\/)/g, '$1./$2');
      content = content.replace(/(?<!:)\/(_next\/data\/)/g, './$1');

      if (content !== original) {
        fs.writeFileSync(full, content, 'utf8');
        console.log('Patched', path.relative(root, full));
      }
    }
  }
}

walk(root);
console.log('Done scanning and patching out_cpanel');
