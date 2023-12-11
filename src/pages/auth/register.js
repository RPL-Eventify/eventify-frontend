import Layout from '@/components/Layout';
import RegisterForm from '@/components/auth/RegisterForm';

export default function Login() {
  return (
    <Layout>
      <div className="flex flex-1 content-center justify-center">
        <RegisterForm />
      </div>
    </Layout>
  );
}
