import { getSignInUrl, getSignUpUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";

export default async function Home() {
  /*
  await getUser():

  { user: null }
  {
    sessionId: 'session_01J8JDG3DRE33TYSDNJX8SC84Z',
    user: {
      object: 'user',
      id: 'user_01J8JCYTEA4V7WD8CJQC1H8875',
      ...
    }
  }
  */
  const user = await getUser();

  /*
  await getSignInUrl():

  https://api.workos.com/user_management/...
  */
  const signInUrl = await getSignInUrl();
  const signUpUrl = await getSignUpUrl();


  return (
    <main>
      {
        user.user ? (
          <div>
            <h1>Hello Deric</h1>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <p>Welcome back{user.user.firstName && `, ${user.user.firstName}`}</p>
              <button type="submit">Sign out</button>
            </form>
          </div>
        ) : (
          <div>
            <a href={signInUrl}>Sign in</a>
            <a href={signUpUrl}>Sign up</a>
          </div>
        )
      }
    </main>
  );
}
