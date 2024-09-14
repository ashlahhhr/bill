import Link from "next/link";
import { prisma } from "@/utils/prisma";

// async function getUsers() {
//   const res = await fetch("http://localhost:3000/api/v1/users", {
//     cache: "no-store",
//   });
//   const data = await res.json();
//   return data;
// }

async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    return users;
  } catch (error) {
    console.log("error bos, ga dapet datanya", error);
    return { users: [] };
  }
}

export default async function Page() {
  const users = await getUsers();

  return (
    <main>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>{user.username}</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
