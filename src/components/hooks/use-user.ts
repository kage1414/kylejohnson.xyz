import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios(url).then((r) => r.data);

export function useUser() {
  const fetched = useSWR('/api/user', fetcher);
  const { data, mutate, isLoading } = fetched;
  // if data is not defined, the query has not completed
  const loading = isLoading || !data;
  const user = data?.user;
  return [user, { mutate, loading }];
}
