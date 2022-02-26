import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home"
import {useState} from 'react';
import {useUserState} from "./database/users";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import logo from './images/Fountain-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Profile} from "./pages/Profile";
import {Navbar, NavbarBrand, Container} from "react-bootstrap";
import {Burger} from "./Burger/Burger";
import {Menu} from "./Menu/Menu";
import Start from "./pages/Start";
import {Preview} from "./pages/Preview";

function App() {
  const [uid, setUid] = useState("")
  const [UEmail, setUEmail] = useState("");
  const [UName, setUName] = useState("");
  const [user] = useUserState({setUEmail, setUName, setUid});
  const [open, setOpen] = useState(false);

  return (
        <div>
            {user? <Navbar bg="light">
                <Container>
                    <NavbarBrand className="me-2" href="/">
                        <img className="d-inline-block align-top" src={logo} alt="logo" height="60"/>
                    </NavbarBrand>
                </Container>
                <div>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} uid={uid} setUid={setUid}/>
                </div>
            </Navbar> : null}

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login user={user} UEmail={UEmail} UName={UName}
                                                                setUEmail={setUEmail} setUName={setUName} setUid={setUid}/>} />
                    <Route path="/home/:uid" element={<Home />} />
                    <Route path="/start/:uid" element={<Start />} />
                    <Route path="/profile/:uid" element={<Profile />} />
                    <Route path="/preview/:uid" element={<Preview />} />
                </Routes>
            </BrowserRouter>
      </div>
    );
}

export default App;
