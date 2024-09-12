async function getUser(userId) {
  const res = await fetch(`http://localhost:3000/api/v1/users/${userId}`);
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const userId = params.id;
  const userData = await getUser(userId);

  return (
    <main>
      <p>Detail user:</p>
      <div>{userData?.data?.id}</div>
      <div>{userData?.data?.username}</div>
      <div>{userData?.data?.email}</div>
    </main>
  );
}
