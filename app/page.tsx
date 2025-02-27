import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="text-lg font-bold mb-2">Welcome to NextJs 13</div>
      <Link
        className="text-blue-500 mb-2"
        href="/users"
      >
        Users
      </Link>
      <Link
        className="text-blue-500"
        href="/users/new"
      >
        New User
      </Link>
    </main>
  );
}
