import React from "react";
import {Card} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {SignInButton, SignOutButton} from "../components/users";
import {fetch_workouts} from "../database/workout";
import {useEffect, useState} from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const UrgeWithPleasureComponent = ({playing}) => {
   return (<CountdownCircleTimer
      isPlaying={playing}
      duration={600}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[7, 5, 2, 0]}
    >
      {({ remainingTime }) =>  {
        const minutes = Math.floor(remainingTime / 60);
        let seconds = remainingTime % 60;
        if (seconds <10){
            seconds = "0"+seconds;
        }
        return `${minutes}:${seconds}`}
        }
    </CountdownCircleTimer>)
}

function Home({ setUEmail, setUName}) {
    const navigate = useNavigate();
    const [workouts, setWorkouts] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [remainingTime, setRemaingTime] = useState();
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
        workouts.map(workout => <div key={Math.random()}>{workout} 2m </div>
        )) 
    }

    return (
        <div className="home-wrapper">
        <Workout />
        {playing? <button onClick={() => setPlaying(false)}>Pause</button>: <button onClick={() => setPlaying(true)}>Start</button>}
        <UrgeWithPleasureComponent playing={playing}/>
        <SignOutButton setUEmail={setUEmail} setUName={setUName} />
        </div>
    );
}

export default Home;