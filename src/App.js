import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import './App.css';

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  
  const logoutCallbackUrl =
    process.env.REACT_APP_VERCEL_ENV === 'production'
      ? process.env.REACT_APP_AUTH0_LOGOUT_URL_PROD
      : process.env.REACT_APP_AUTH0_LOGOUT_URL_PREVIEW;

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <button onClick={() => logout({ returnTo: logoutCallbackUrl })}>Logout</button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login with Redirect</button>
        )}
      </header>
    </div>
  );
}

export default App;

