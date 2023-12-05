import Layout from '@/components/layout';
import LoginForm from '@/components/auth/LoginForm';

export default function Login() {
  return (
    <Layout>
      <div className="flex flex-1 content-center justify-center">
        <LoginForm />
      </div>
    </Layout>
  );
}
