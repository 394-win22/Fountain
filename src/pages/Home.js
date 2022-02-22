import React from "react";
import {Card} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {SignInButton, SignOutButton} from "../components/users";
import {fetch_workouts} from "../database/workout";
import {useEffect, useState} from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {WorkoutArea} from "../components/workoutArea";
import {WorkoutFinished} from "../components/workoutFinished";

function Home() {
    const [workouts, setWorkouts] = useState([]);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        fetch_workouts().then(value => {
            let random = value.sort(() => .5 - Math.random()).slice(0,5);
            const workOutArr = random.map(x => x["Exercise Name"]);
            setWorkouts(workOutArr);
    })
    }, []);

    return (
        <div className="home-wrapper m-3">
            {finished ?
                <WorkoutFinished />
                : <WorkoutArea workouts={workouts} setFinished={setFinished}/>
            }
        </div>
    );
}



export default Home;