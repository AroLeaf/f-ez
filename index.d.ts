declare module 'file-ez';

export function res(path: string): string;
export function recursive(path: string): Promise<string[]>;
export function require(path: string, full?: boolean): Promise<any>;
export function read(path: string): Promise<string>;
export function buffer(path: string): Promise<Buffer>;
export function write(path: string, data: Buffer|string): Promise<undefined>;