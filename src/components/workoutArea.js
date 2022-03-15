import React, {useEffect, useState} from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {storeWorkoutDate} from "../database/users";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {UpdateBadges} from "./badegs";

export var allWorkouts = null; 

function displayMessage (remTime, messages){
    let message = null;
    if (messages) {
        messages = Object.values(messages)
        if (remTime <= 120 && remTime > 115 ){
            message = messages[0]
        }
        else if (remTime <= 115 && remTime > 110){
            message = messages[1]
        }
        else if (remTime <= 110 && remTime > 105){
            message = messages[2]
        }
        else if (remTime <= 105 && remTime > 100){
            message = messages[0]
        }
        else if (remTime <= 100 && remTime > 95){
            message = messages[1]
        }
        else if (remTime <= 95 && remTime > 90){
            message = messages[2]
        }
        else if (remTime <= 90 && remTime > 85){
            message = messages[0]
        }
        else if (remTime <= 85 && remTime > 80){
            message = messages[1]
        }
        else if (remTime <= 80 && remTime > 75){
            message = messages[2]
        }
        else if (remTime <= 75 && remTime > 70){
            message = messages[0]
        }
        else if (remTime <= 70 && remTime > 65){
            message = messages[1]
        }
        else if (remTime <= 65 && remTime > 60){
            message = messages[2]
        }
        else if (remTime <= 60 && remTime > 55){
            message = messages[0]
        }
        else if (remTime <= 55 && remTime > 50){
            message = messages[1]
        }
        else if (remTime <= 50 && remTime > 45){
            message = messages[2]
        }
        else if (remTime <= 45 && remTime > 40){
            message = messages[0]
        }
        else if (remTime <= 40 && remTime > 35){
            message = messages[1]
        }
        else if (remTime <= 35 && remTime > 30){
            message = messages[2]
        }
        else if (remTime <= 30 && remTime > 25){
            message = messages[0]
        }
        else if (remTime <= 25 && remTime > 20){
            message = messages[1]
        }
        else if (remTime <= 20 && remTime > 15){
            message = messages[2]
        }
        else if (remTime <= 15 && remTime > 10){
            message = messages[0]
        }
        else if (remTime <= 10 && remTime > 5){
            message = messages[1]
        }
        else if (remTime <= 5 && remTime > 0){
            message = messages[2]
        }

        return (
            <div>
                {message}
            </div>
        )

    }

}


function UrgeWithPleasureComponent({playing, updateIndex, setPlaying, setOutRemTime, skipKey}){
    const [remTime, setRemTime] = useState(2);
    const [key, setKey] = useState(0);
    useEffect(()=>{
        setKey(skipKey)
    }, [skipKey])
    return (
        <div id="l">
            <CountdownCircleTimer
                isPlaying={playing}
                className="x"
                duration={120}
                key={key}
                isSmoothColorTransition={true}
                size={120}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[120, 100, 50, 0]}
                onComplete={() => {
                    setKey(prevKey => prevKey +1)
                    setPlaying(true);

                    updateIndex();
                }}>
                {({ remainingTime }) =>  {
                    const minutes = Math.floor(remainingTime / 60);
                    let seconds = remainingTime % 60;
                    setRemTime((minutes*60) + seconds)
                    setOutRemTime(remTime);
                    if (seconds <10){
                        seconds = "0"+seconds;
                    }
                    return `${minutes}:${seconds}`}
                }
            </CountdownCircleTimer>
        </div>
    )
}

export function WorkoutArea({ workouts, instructions, gifs, setFinished, uid}) {
    const [playing, setPlaying] = useState(true);
    const [index, setIndex] = useState(0);
    const [skipKey, setSkipKey] = useState(0)
    const [outRemTime, setOutRemTime] = useState(2);
    const [finishedWorkouts, setFinishedWorkout] = useState([]);

    const Workout = () => {
        return(
            <div>
                <h1 data-dy="wodc" className="wodc"> WODC </h1>
                <div className="workout">{workouts[index]}</div>
            </div>
        )
    }

    const updateIndex = () => {
        if (index + 1 >= workouts.length) {
            storeWorkoutDate(uid).then(setFinished(true))
            UpdateBadges(uid)
        }
        setIndex(index + 1);
        setFinishedWorkout(finishedWorkouts => [...finishedWorkouts, index]);
    }

    const allFinishedWorkouts = () => {
        let allFinishedWorkouts = [];
        for(let i = 0; i < finishedWorkouts.length; i++){
            allFinishedWorkouts.push(workouts[i])
        }
        return allFinishedWorkouts;
    }
    allWorkouts = allFinishedWorkouts()

    return (
        <div>
            <Workout />
            <div className="gif-wrapper"> <img data-cy="gif" className="gif" src= {gifs[index]} alt={"gif"}/></div>
            <div data-cy="message" className="displayMessage">{displayMessage(outRemTime, instructions[index])}</div>
            <div className="timewrapper">
                <div className="workout-index">Exercise {index + 1}/{workouts.length}</div>
                { index < 5 ?
                    <div>
                        { playing ?
                            <div>
                                <button type="button" className="timer-button" onClick={() => setPlaying(false)} >
                                    <i className="bi bi-pause"/>
                                </button>
                            </div>:
                            <div>
                                <button type="button" className="timer-button" onClick={() => setPlaying(true)}>
                                    <i className="bi bi-play"/>
                                </button>
                                <button type="button" className="timer-button" onClick={()=> {
                                     updateIndex()
                                     setSkipKey(Math.floor(Math.random()*10000000))
                                    }}><i className="bi bi-skip-forward"/>
                                </button>
                            </div>
                        }
                    </div>
                    : null
                }
                <div className="timer">
                    <UrgeWithPleasureComponent 
                        setOutRemTime={setOutRemTime} className="timer-component" playing={playing}
                        updateIndex={updateIndex} setPlaying={setPlaying} skipKey={skipKey}
                    />
                </div>
            </div>
        </div>

    )
}