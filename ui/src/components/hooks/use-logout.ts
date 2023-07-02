import axios from "axios";

import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router";

interface SecondaryAttributes {
  loading: boolean;
}

type Return = [() => void, SecondaryAttributes];

export const useLogout = (): Return => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const logout = useCallback(() => {
    setLoading(true);
    axios({
      url: "/api/logout",
      method: "POST",
      timeout: 10000,
    }).then(() => {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        navigate(0);
      }
      setLoading(false);
    });
  }, [location.pathname, navigate]);

  return [logout, { loading }];
};
