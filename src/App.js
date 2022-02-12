import logo from './logo.svg';
import './App.css';
import {SignInButton} from "./components/users"
import Login from "./pages/Login";
import {useEffect, useState} from 'react';
import {useUserState} from "./database/users";

function App() {
  const [uid, setUid] = useState("")
  const [UEmail, setUEmail] = useState("");
  const [UName, setUName] = useState("");
  const [user] = useUserState({setUEmail, setUName, setUid});
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Fountain!
        </p>
        <Login user={user} UEmail={UEmail} UName={UName}
                                                     setUEmail={setUEmail} setUName={setUName} setUid={setUid}
                                                     
                />
      </header>
    </div>
  );
}

export default App;
