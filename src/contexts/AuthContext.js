import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PATH from '@/routes/paths';
import axios from 'axios';

const AuthContext = createContext({});

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  function saveTokens(refresh, access) {
    localStorage.setItem('refreshToken', refresh);
    localStorage.setItem('accessToken', access);
    setTokens({ refresh, access });
  }

  useEffect(() => {
    const storedRefreshToken = localStorage.getItem('refreshToken');
    const storedAccessToken = localStorage.getItem('accessToken');

    if (storedRefreshToken && storedAccessToken) {
      setTokens({ refresh: storedRefreshToken, access: storedAccessToken });
    }
    setLoading(false);
  }, []);

  async function getUser() {
    try {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: PATH.currentUser,
        headers: {
          Authorization: `Bearer ${tokens?.access}`,
        },
      };

      const response = await axios.request(config);
      const userData = response.data;

      const user = {
        id: userData.id,
        email: userData.email,
        nama_depan: userData.nama_depan,
        nama_belakang: userData.nama_belakang,
        nama_lengkap: userData.nama_lengkap,
      };

      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (tokens) {
      getUser();
    }
  }, [tokens]);

  useEffect(() => {
    const handleRefreshToken = async () => {
      if (tokens && !validateJwtExp(tokens.access)) {
        try {
          axios
            .post(PATH.refreshToken, {
              refresh: tokens.refresh,
            })
            .then((response) => {
              localStorage.setItem('accessToken', response.data.access);
              saveTokens(tokens.refresh, response.data.access);
              console.log('yes');
            })
            .catch(() => {
              handleTokenRefreshError();
            });
        } catch (error) {
          handleTokenRefreshError();
        }
      }
    };

    handleRefreshToken();
  }, [tokens]);

  function handleTokenRefreshError() {
    setUser(null);
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    router.push('/auth/login');
  }

  const contextValue = {
    user,
    setUser,
    tokens,
    setTokens,
    saveTokens,
    loading: isLoading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

function validateJwtExp(token) {
  const rawToken = token.includes('Bearer') ? token.split(' ')[1] : token;

  const { exp, iat } = parseJwt(rawToken);

  const now = Math.round(new Date().getTime() / 1000);

  const timeElapsed = now - iat;
  const timeRemaining = exp - iat;

  return timeElapsed < timeRemaining;
}
