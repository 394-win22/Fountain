import logo from './logo.svg';
import './App.css';
import {SignInButton} from "./components/users"
import Login from "./pages/Login";
import Survey from "./pages/Survey";
import {useEffect, useState} from 'react';
import {useUserState} from "./database/users";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [uid, setUid] = useState("")
  const [UEmail, setUEmail] = useState("");
  const [UName, setUName] = useState("");
  const [user] = useUserState({setUEmail, setUName, setUid});
  return (
      <BrowserRouter>
      <div className="page-header">
          <h1 style={{fontFamily:"Fredericka the Great"}} >Outdoor Companion</h1>
      </div>

      <Routes>
          <Route path="/" element={<Login user={user} UEmail={UEmail} UName={UName}
                                                        setUEmail={setUEmail} setUName={setUName} setUid={setUid}/>} />
          <Route path="/survey" element={<Survey user={user} UEmail={UEmail} UName={UName}
                                              setUEmail={setUEmail} setUName={setUName} setUid={setUid}
                                              question={"How are you feelng?"}
                                            
          />} />
      </Routes>

      </BrowserRouter>
    );
}

export default App;
