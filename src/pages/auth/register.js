import Layout from '@/components/layout';
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
