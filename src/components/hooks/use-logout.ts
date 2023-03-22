import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

interface SecondaryAttributes {
  loading: boolean;
}

type Return = [() => void, SecondaryAttributes];

export const useLogout = (): Return => {
  const { route, push, reload } = useRouter();
  const [loading, setLoading] = useState(false);
  const logout = useCallback(() => {
    setLoading(true);
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
      setLoading(false);
    });
  }, [push, reload, route]);

  return [logout, { loading }];
};
