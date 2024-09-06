import { MyError } from '@my-org/sdk';
import {
  useQuery as _useQuery,
  QueryClient,
  type UseQueryOptions as _UseQueryOptions,
  type UseQueryResult,
  type QueryKey,
} from '@tanstack/react-query';

export type UseQueryOptions<
  TQueryFnData = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Omit<
  _UseQueryOptions<TQueryFnData, MyError, TData, TQueryKey>,
  'queryFn' | 'queryKey'
>;

export function useQuery<
  TQueryFnData = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  options: _UseQueryOptions<TQueryFnData, MyError, TData, TQueryKey>,
  queryClient?: QueryClient
): UseQueryResult<TData, MyError> {
  return _useQuery<TQueryFnData, MyError, TData, TQueryKey>(
    options,
    queryClient
  );
}
