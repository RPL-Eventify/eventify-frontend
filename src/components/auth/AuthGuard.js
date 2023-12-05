import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function AuthGuard({ children }) {
  const { tokens, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !tokens) {
      router.push('/auth/login');
    }
  }, [loading, router, tokens]);

  // show loading indicator while the auth provider is still initializing
  if (loading) {
    return <h1>Application Loading</h1>;
  }

  // if auth initialized with a valid user show protected page
  if (!loading && tokens) {
    return <>{children}</>;
  }

  // otherwise don't return anything, will do a redirect from useEffect
  return null;
}
