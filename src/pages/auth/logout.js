import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/contexts/AuthContext';

export default function Logout() {
  const router = useRouter();
  const { setUser, setTokens, tokens } = useAuthContext();
  const [calledReplace, setCalledReplace] = useState(false);

  useEffect(() => {
    if (tokens) {
      setUser(null);
      setTokens(null);
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');
    }

    if (calledReplace) {
      return;
    }

    setCalledReplace(true);
    setTimeout(() => {
      router.replace('/');
    }, 2000);
  }, [tokens, router, setUser, setTokens]);

  return (
    <div className="flex h-full items-center justify-center text-3xl font-bold">
      Logout successful! You will be redirected to the homepage
    </div>
  );
}
