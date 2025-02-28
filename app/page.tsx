import Link from 'next/link';
import Button from '@/components/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="text-lg font-bold mb-2">Nextjs 13 Basic Features</div>
      <Link className="text-blue-500 mb-2" href="/users">
        Users
      </Link>
      <Link className="text-blue-500" href="/users/new">
        New User
      </Link>
      <Button label="Click Me!" />
    </main>
  );
}
