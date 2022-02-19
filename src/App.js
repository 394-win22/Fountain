//import logo from './logo.svg';
import './App.css';
import {SignInButton} from "./components/users"
import Login from "./pages/Login";
import Survey1 from "./pages/Survey1";
import AfterSurvey from "./pages/AfterSurvey"
import Home from "./pages/Home"
import Survey2 from "./pages/Survey2";
import Survey3 from "./pages/Survey3";
import Survey4 from "./pages/Survey4";
import Workout from "./pages/Workout"
import {useEffect, useState} from 'react';
import {useUserState} from "./database/users";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import logo from './images/fountainlogo.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import SurveyComponent from "./pages/Survey";
import Pose from "./pages/Pose";

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
      </Routes>

      </BrowserRouter>
      </div>

    );
}

export default App;
