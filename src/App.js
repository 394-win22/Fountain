import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home"
import {useEffect, useState} from 'react';
import {useUserState} from "./database/users";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import logo from './images/fountainlogo.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Profile} from "./pages/Profile";

function App() {
  const [uid, setUid] = useState("")
  const [UEmail, setUEmail] = useState("");
  const [UName, setUName] = useState("");
  const [user] = useUserState({setUEmail, setUName, setUid});
  return (

        <div>
       <span className="header"><img className="logo" src={logo}></img></span>

      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login user={user} UEmail={UEmail} UName={UName}
                                                        setUEmail={setUEmail} setUName={setUName} setUid={setUid}/>} />
          <Route path="/home" element={<Home UEmail={UEmail} UName={UName}
                                                   setUEmail={setUEmail} setUName={setUName}/>} />
          <Route path="profile/:id" element={<Profile />} />
      </Routes>

      </BrowserRouter>
      </div>

    );
}

export default App;
