# F-ez

easy file stuff I suppose

## Install

```sh
npm i file-ez
```

## Usage

f-ez supports commonjs:
```js
const fz = require('file-ez');

fz.res('./file.txt');
```

but also exports everything separately for esm:
```js
import { res } from 'file-ez';

res('./file.txt');
```

## Documentation

### `res(path: string): string`
Resolves a path relative to the file it's called in.\
`path`: an absolute path, or path relative to the current file

### `async recursive(path: string): Promise<string[]>`
Recursively gathers all files in a directory and its subdirectories.\
`path`: an absolute path, or path relative to the current file

### `async require(path: string, full = false): Promise<any>`
Makes `import()` feel more like `require()`, allows mixing esm and commonjs.\
`path`: an absolute path, path relative to the current file, or name of an installed package\
`full`: return the entire module instead of only default

### `async read(path: string): Promise<string>`
Returns the contents of a file as a string.\
`path`: an absolute path, or path relative to the current file

### `async buffer(path: string): Promise<Buffer>`
Returns the contents of a file as a buffer.\
`path`: an absolute path, or path relative to the current file

### `async write(path: string, data: Buffer|string): Promise<undefined>`
Writes data to a file.\
`path`: an absolute path, or path relative to the current file\
`data`: what you want to write to the file