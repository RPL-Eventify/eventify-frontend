import { Card } from 'flowbite-react';
import Link from 'next/link';

export default function Protected() {
  return (
    <>
      <div>Protected</div>
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Flowbite Test
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <Link href={'/auth/logout'}>Logout Page</Link>
        </p>
      </Card>
    </>
  );
}

Protected.requireAuth = true;
