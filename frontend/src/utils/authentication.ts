import {UserManager, UserManagerSettings} from "oidc-client";

var settings: UserManagerSettings = {
    authority: "http://localhost:8080/auth/realms/master",
    redirect_uri: "http://localhost:3000/auth/signin",
    post_logout_redirect_uri: "http://localhost:3000/auth/signout",
    client_id: "react-application",
    response_type: "code"
}

export const userManager = new UserManager(settings);