import { getUser } from "@workos-inc/authkit-nextjs";

export default async function Home() {
  /*
  await getUser():

  { user: null }
  */
  const user = await getUser();
  console.log(user);

  return (
    <h1>Hello Deric</h1>
  );
}
