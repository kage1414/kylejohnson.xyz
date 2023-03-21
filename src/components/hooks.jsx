import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r);

export function useUser() {
  const { data, mutate, isLoading } = useSWR('/api/user', fetcher);
  // if data is not defined, the query has not completed
  const loading = isLoading || !data;
  const user = data?.user;
  return [user, { mutate, loading }];
}

export const useLogout = () => {
  const { route, push, reload } = useRouter();
  const logout = useCallback(() => {
    axios({
      url: '/api/logout',
      method: 'POST',
      timeout: 10000,
    }).then(() => {
      if (route !== '/') {
        push('/');
      } else {
        reload();
      }
    });
  }, [push, reload, route]);

  return { logout };
};
