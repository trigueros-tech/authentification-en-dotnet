import { useEffect } from "react";
import { useNavigate } from "react-router";
import { userManager } from "../utils/authentication";

const SignoutCallback = () => {

    const navigate = useNavigate();
    useEffect(() => {
        userManager.signoutCallback().then(() => navigate("/"));
    }, [navigate]);

    return <h1>Sign out callback</h1>;
};

export default SignoutCallback;
