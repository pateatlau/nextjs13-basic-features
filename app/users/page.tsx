import Link from 'next/link';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Users = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="text-lg font-bold mb-2">Users</div>
      <ul className="flex flex-col gap-2 list-disc mb-5">
        {users.map((user: User) => (
          <li key={user.id}>
            <Link className="text-blue-500" href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link className="text-blue-500 m-2" href="/">
        Home
      </Link>
      <Link className="text-blue-500" href="/users/new">
        New User
      </Link>
    </main>
  );
};

export default Users;
