import React, { useEffect, useState, FC } from "react";
import { userManager } from "../utils/authentication";
import { User } from "oidc-client";

const UnknownHome = () => {
  return (
    <>
      <h1>Please authenticate</h1>
      <button onClick={() => userManager.signinRedirect()}>Sign in</button>
    </>
  );
};

const AuthenticatedHome: FC<{ user: User }> = ({ user }) => {
  const [content, setContent] = useState<string | null>(null);

  const load = async () => {
    const response = await fetch("https://localhost:5001/api/test", {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${user.access_token}`,
      }),
    });
    if (response.ok) {
      const responseText = await response.text();
      setContent(responseText);
    }
  };
  
  return (
    <>
      <h1>Welcome {user.profile.preferred_username}</h1>
      <h2>here is your data:</h2>
      <p>{JSON.stringify(user)}</p>
      {content ? <p>server returned : {content}</p> : null}
      <button onClick={load}>Get data</button>
      <button onClick={() => userManager.signoutRedirect()}>Sign out</button>
    </>
  );
};

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    userManager.getUser().then(setUser);
  }, []);

  return <>{user ? <AuthenticatedHome user={user} /> : <UnknownHome />}</>;
};

export default Home;
