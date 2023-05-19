export type RequestResult<T> = Promise<T | {isError: boolean; message: string}>;
