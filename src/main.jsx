import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

// Create the root of the application
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    {/* Wrap the app with Auth0Provider and Router */}
    <Auth0Provider
      domain="dev-kjno4tk8yj3wbz0c.us.auth0.com"
      clientId="Lag4MmFB3bsRQqZx0AYfvUcOJTKfj26T"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </StrictMode>
);
