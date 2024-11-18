import Keycloak from 'keycloak-js'

const keycloakProp = {
    url: 'http://localhost:8080/',
    realm: 'myfit',
    clientId: 'react',
  }
  
  const keycloak = new Keycloak(keycloakProp)
  export default keycloak