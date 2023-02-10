import { useEffect } from "react";
import { useNavigate } from "react-router";
import { userManager } from "../utils/authentication";

const SigninCallback = () => {

    const navigate = useNavigate();

    useEffect(() => {
        userManager.signinCallback().then(() => navigate("/"));
    }, [navigate]);

    return <h1>Sign in callback</h1>;
};

export default SigninCallback;
