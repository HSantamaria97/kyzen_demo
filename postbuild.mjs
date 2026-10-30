import { readdir, unlink } from 'node:fs/promises';
import path from 'node:path';
const output = path.resolve('out');
for (const name of await readdir(output)) {
  if (/^IMG_\d+\.JPG$/i.test(name) || /^[a-f0-9-]{36}\.jpg$/i.test(name) || name === '.DS_Store') {
    const target = path.resolve(output, name);
    if (path.dirname(target) !== output) throw new Error('Invalid export asset path');
    await unlink(target);
  }
}
console.log('Export ready in out/; original uploads excluded.');
