import type { ParamsType, Something } from '@my-org/types';
import { useQuery, type UseQueryOptions } from './queries';
import { getSomething } from './indirect';

export function useGetSomethingQuery(
  params: ParamsType,
  queryOptions?: UseQueryOptions<Something>
) {
  return useQuery({
    ...queryOptions,
    queryFn: () => getSomething(params),
    queryKey: ['something', params],
  });
}
