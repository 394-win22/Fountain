import logo from './logo.svg';
import './App.css';
import {SignInButton} from "./components/users"
import Login from "./pages/Login";
import Survey1 from "./pages/Survey1";
import AfterSurvey from "./pages/AfterSurvey"
import Home from "./pages/Home"
import Survey2 from "./pages/Survey2";
import Survey3 from "./pages/Survey3";
import {useEffect, useState} from 'react';
import {useUserState} from "./database/users";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [uid, setUid] = useState("")
  const [UEmail, setUEmail] = useState("");
  const [UName, setUName] = useState("");
  const [user] = useUserState({setUEmail, setUName, setUid});
  return (
      <BrowserRouter>
      <div className="page-header">
          <h1 style={{fontFamily:"Fredericka the AfterSurvey"}} >Fountain</h1>
      </div>

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
                                                   question={"Before we begin, is there any injuries or limitations do you have?"}
          />}/>
          <Route path="/aftersurvey" element={<AfterSurvey/>} />
          <Route path="/home" element={<Home/>} />
      </Routes>

      </BrowserRouter>
    );
}

export default App;
