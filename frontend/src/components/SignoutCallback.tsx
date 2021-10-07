import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { userManager } from "../utils/authentication";

const SignoutCallback = () => {
  
  const history = useHistory();

  useEffect(() => {
    userManager.signoutCallback().then(() => history.push("/"));
  }, [history]);

  return <h1>Sign out callback</h1>;
};

export default SignoutCallback;
