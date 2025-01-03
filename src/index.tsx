import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import {keycloak} from "./utils/keycloak";
import {Provider} from "react-redux";
import {store} from "./utils/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ReactKeycloakProvider authClient={keycloak}>
            <App />
        </ReactKeycloakProvider>
    </Provider>
);

reportWebVitals(console.log);
