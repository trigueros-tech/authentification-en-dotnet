import { UserManager, UserManagerSettings } from "oidc-client-ts"

const settings = {
    authority: "http://localhost:8080/auth/realms/master",
    redirect_uri: "http://localhost:5173/auth/signin",
    post_logout_redirect_uri: "http://localhost:5173/auth/signout",
    client_id: "my-client",
    response_type: "code",
    scope: "openid profile offline_access"

} satisfies UserManagerSettings

export const userManager = new UserManager(settings);