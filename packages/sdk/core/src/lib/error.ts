export class MyError extends Error {
  #originalError: Error;
  code: number;
  details?: string | object;

  constructor(err: Error, code?: number, details?: string | object) {
    const message = err.message;
    super(message);

    this.name = 'MyError';
    this.code = code || 500;
    this.details = details;
    this.#originalError = err;
  }

  getOriginalError() {
    return this.#originalError;
  }
}

export function throwMyError(
  message: string,
  code?: number,
  details?: string | object
): never {
  const err = new Error(message);
  throw new MyError(err, code || 500, details);
}
