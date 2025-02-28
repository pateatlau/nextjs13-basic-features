import Link from 'next/link';
import { User } from '../page';

const UserDetails = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.id}`,
  );
  const user: User = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="text-lg font-bold mb-2">User details</div>
      <div className="border-blue-500 border-2 p-3 mb-5 rounded-md text-white bg-blue-500">
        <div>{`Id: ${user.id}`}</div>
        <div>{`Name: ${user.name}`}</div>
        <div>{`Username: ${user.username}`}</div>
        <div>{`Email: ${user.email}`}</div>
        <div>{`Address: ${user.address.street}`}</div>
        <div>{`Suite: ${user.address.suite}`}</div>
        <div>{`City: ${user.address.city}`}</div>
        <div>{`Zipcode: ${user.address.zipcode}`}</div>
        <div>{`Geo Lat: ${user.address.geo.lat}`}</div>
        <div>{`Geo Long: ${user.address.geo.lng}`}</div>
        <div>{`Phone: ${user.phone}`}</div>
        <div>{`Website: http://www.${user.website}`}</div>
        <div>{`Company: ${user.company.name}`}</div>
        <div>{`CatchPhrase: ${user.company.catchPhrase}`}</div>
        <div>{`Bs: ${user.company.bs}`}</div>
      </div>
      <Link className="text-blue-500 mb-2" href="/">
        Home
      </Link>
      <Link className="text-blue-500" href="/users">
        Users
      </Link>
    </main>
  );
};

export default UserDetails;
