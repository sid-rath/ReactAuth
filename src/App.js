import { useAuth0 } from "@auth0/auth0-react";

import './App.css';

function App() {
  const { user, loginWithRedirect , isAuthenticated, logout} =useAuth0();
  console.log(user);
  
  return (
    <div className="App">
      <header className="App-header"> 
      {
        isAuthenticated ? <button onClick={() => logout()}>logout</button> : <button onClick={() => loginWithRedirect()}>
        Login with redirect
     </button>
      }
      </header>
    </div>
  );
}

export default App;
