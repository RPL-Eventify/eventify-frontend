import Layout from '@/components/layout';
import HomePage from '@/components/HomePage';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-1 content-center justify-center">
        <HomePage />
      </div>
    </Layout>
  );
}
