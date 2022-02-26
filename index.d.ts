declare module 'file-ez';

export function res(path: string): string;
export async function recursive(path: string): Promise<string[]>;
export async function require(path: string): Promise<any>;
export async function read(path: string): Promise<string>;
export async function buffer(path: string): Promise<Buffer>;
export async function write(path: string, data: Buffer|string): Promise<undefined>;