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
resolves a path relative to the file it's called in\
`path`: an absolute path, or path relative to the current file

### `async recursive(path: string): Promise<string[]>`
recursively gathers all files in a directory and its subdirectories\
`path`: an absolute path, or path relative to the current file

### `async require(path: string): Promise<any>`
makes `import()` feel more like `require()`, allows mixing esm and commonjs\
`path`: an absolute path, path relative to the current file, or name of an installed package

### `async read(path: string): Promise<string>`
returns the contents of a file as a string\
`path`: an absolute path, or path relative to the current file

### `async buffer(path: string): Promise<Buffer>`
returns the contents of a file as a buffer\
`path`: an absolute path, or path relative to the current file

### `async write(path: string, data: Buffer|string): Promise<undefined>`
writes data to a file\
`path`: an absolute path, or path relative to the current file\
`data`: what you want to write to the file