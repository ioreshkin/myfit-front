import Keycloak, {KeycloakInstance} from "keycloak-js"

export const keycloak = new Keycloak({
    url: process.env.REACT_APP_KEYCLOAK_URL,
    realm: process.env.REACT_APP_REALM ?? '',
    clientId: process.env.REACT_APP_CLIENT_ID ?? '',
});