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
          <Route path="/survey1" element={<Survey1 user={user} UEmail={UEmail} UName={UName}
                                              setUEmail={setUEmail} setUName={setUName} setUid={setUid}
                                              question={"How are you feeling?"}

          />} />
          <Route path="/survey2" element={<Survey2 user={user} UEmail={UEmail} UName={UName}
                                              setUEmail={setUEmail} setUName={setUName} setUid={setUid}
                                              question={"What kind of workout are you looking for?"}

          />} />
          <Route path="/survey3" element={<Survey3 user={user} UEmail={UEmail} UName={UName}
                                                   setUEmail={setUEmail} setUName={setUName} setUid={setUid}
                                                   question={"Before we begin, any new injuries or limitations you'd like to discuss?"}
          />}/>
          <Route path="/survey4" element={<Survey4 user={user} UEmail={UEmail} UName={UName}
                                                   setUEmail={setUEmail} setUName={setUName} setUid={setUid}
                                                   question={"Where is your injury?"}
          />}/>
          <Route path="/aftersurvey" element={<AfterSurvey/>} />
          <Route path="/home" element={<Home UEmail={UEmail} UName={UName}
                                                   setUEmail={setUEmail} setUName={setUName}/>} />
          <Route path="/pose" element={<Pose/>} />
          <Route path="/test" element={<SurveyComponent/>} />
          <Route path="/workout" element={<Workout/>} />
      </Routes>

      </BrowserRouter>
      </div>

    );
}

export default App;
