import Layout from '@/components/layout';
import LoginForm from '@/components/auth/LoginForm';

export default function Login() {
  return (
    <Layout>
      <div className="flex h-screen items-center justify-center">
        <LoginForm />
      </div>
    </Layout>
  );
}
