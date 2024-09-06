import type { Something, ParamsType } from '@my-org/types';
import { throwMyError } from './error';

export async function getSomething({
  id,
  name,
}: ParamsType): Promise<Something> {
  // mock fetch by providing a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (!id) {
    throwMyError('id is required', 400);
  }
  return {
    bar: parseInt(id),
    foo: name,
  };
}
