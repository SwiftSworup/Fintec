const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'out_cpanel');
if (!fs.existsSync(root)) {
  console.error('out_cpanel folder not found:', root);
  process.exit(1);
}

const exts = new Set(['.html', '.js', '.css', '.json', '.txt']);

function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) walk(full);
    else {
      const ext = path.extname(name.name).toLowerCase();
      if (!exts.has(ext)) continue;
      let content = fs.readFileSync(full, 'utf8');
      const original = content;

      // Normalize various wrong prefixes to ./_next/
      content = content.replace(/(\.\.)+\/?__next\//g, './_next/');
      content = content.replace(/(\.\.)+\/?_next\//g, './_next/');
      content = content.replace(/\._next\//g, './_next/');
      content = content.replace(/\/__next\//g, './_next/');

      // images -> ensure ./images/
      content = content.replace(/(\.\.)+\/?images\//g, './images/');
      content = content.replace(/\/images\//g, './images/');

      // next/static variants that may appear as ../next/static or ../next or ../_next
      content = content.replace(/(\.\.)+\/?next\/static\//g, './_next/static/');

      if (content !== original) {
        fs.writeFileSync(full, content, 'utf8');
        console.log('Patched', path.relative(root, full));
      }
    }
  }
}

walk(root);
console.log('Done step2 patching out_cpanel');
