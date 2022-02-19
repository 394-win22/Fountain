import React from "react";
import {Card} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {SignInButton, SignOutButton} from "../components/users";
import {fetch_workouts} from "../database/workout";
import {useEffect, useState} from 'react';


function Home({ UEmail, setUEmail, UName, setUName}) {
    const navigate = useNavigate();
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch_workouts().then(value => {
            let random = value.sort(() => .5 - Math.random()).slice(0,5);
            const workOutArr = random.map(x => x["Exercise Name"]);
            setWorkouts(workOutArr);
            console.log(workOutArr);
    })
    }, []);

    const Workout = () => {
        return(
        workouts.map(workout => <div key={workout["Index"] }>{workout} </div>
        )) 
    }
    

    return (
        <div className="home-wrapper">
        <Workout />
        <SignOutButton setUEmail={setUEmail} setUName={setUName} />
        </div>
    )  
}

export default Home;

