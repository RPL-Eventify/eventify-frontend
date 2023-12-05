import '@/styles/globals.css';
import { AuthContextProvider } from '@/contexts/AuthContext';
import AuthGuard from '@/components/auth/AuthGuard';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        {Component.requireAuth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          <Component {...pageProps} />
        )}
      </AuthContextProvider>
    </>
  );
}
