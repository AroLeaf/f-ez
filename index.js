// @ts-check
const fs = require('fs/promises');
const path = require('path');
const caller = require('caller');
const url = require('url');

function res(fp) {
  if (path.isAbsolute(fp)) return fp;
  let callerPath = caller();
  if (callerPath.startsWith('file://')) callerPath = url.fileURLToPath(callerPath);
  return path.resolve(path.dirname(callerPath), fp);
}

async function recursive(fp) {
  fp = res(fp);
  return (async function recurse(fp, files = []) {
    const paths = await fs.readdir(fp);
    for (const p of paths.map(p => path.join(fp, p))) {
      const stat = await fs.stat(p);
      if (stat.isFile()) files.push(p);
      if (stat.isDirectory()) await recurse(p, files);
    }
    return files;
  })(fp);
}

async function _require(fp, full = false) {
  fp = fp.startsWith('.') ? res(fp) : fp;
  const module = await import(fp);
  return full ? module : module.default;
}

async function read(fp) {
  return fs.readFile(res(fp), { encoding: 'utf-8' });
}
async function buffer(fp) {
  return fs.readFile(res(fp));
}

async function write(fp, data) {
  return fs.writeFile(res(fp), data, { encoding: typeof data === 'string' ? 'utf-8' : null});
}

module.exports = {
  res, recursive, 
  require: _require,
  read, buffer, write,
}