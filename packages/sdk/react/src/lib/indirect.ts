import { getSomething as sdkGetSomething } from '@my-org/sdk';

export const getSomething = (arg: any) => {
  console.log('getting Something');
  return sdkGetSomething(arg);
};
