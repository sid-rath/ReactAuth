import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
       domain="dev-q0rei82tke1b4xd5.us.auth0.com"
       clientId="I8lOMJELi5so0QYg2P5hfpTwkmxTQRW2"
       authorizationParams={{
         redirect_uri: window.location.origin
       }}
    >
      <App />
    </Auth0Provider>
   
  </React.StrictMode>
);


reportWebVitals();
