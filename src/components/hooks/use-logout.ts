import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { useUser } from '@/lib/hooks';

interface SecondaryAttributes {
  loading: boolean;
}

type Return = [() => void, SecondaryAttributes];

export const useLogout = (): Return => {
  const { route, push } = useRouter();
  const [, { mutate }] = useUser();
  const [loading, setLoading] = useState(false);
  const logout = useCallback(() => {
    setLoading(true);
    axios({
      url: '/api/logout',
      method: 'POST',
      timeout: 10000,
    }).then((response) => {
      if (route !== '/') {
        push('/');
      }
      mutate(undefined);
      setLoading(false);
    });
  }, [mutate, push, route]);

  return [logout, { loading }];
};
