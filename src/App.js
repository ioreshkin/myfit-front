import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak'
import MainPage from './MainPage'


function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <MainPage />
    </ReactKeycloakProvider>
  );
}

export default App;
