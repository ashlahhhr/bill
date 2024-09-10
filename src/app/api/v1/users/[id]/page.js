async function getUser(userId) {
  const res = await fetch(`http://localhost:3000/api/v1/users/${userId}`);
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const userId = params.id;
  const { data } = await getUser(userId);
  console.log(data);

  return (
    <main>
      {/* <div>{data.id}</div>
      <div>{data.username}</div>
      <div>{data.email}</div> */}
    </main>
  );
}
