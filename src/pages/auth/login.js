import Layout from '@/components/Layout';
import LoginForm from '@/components/auth/LoginForm';

export default function Login() {
  return (
    <Layout>
      <div className="flex h-full items-center justify-center">
        <LoginForm />
      </div>
    </Layout>
  );
}
