import React, {useEffect, useState} from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {storeWorkoutDate} from "../database/users";

import {UpdateBadges} from "./badegs";

export var allWorkouts = null; 

function displayMessage (remTime, messages){
    let message = null;
    if (messages) {
        messages = Object.values(messages)
        if (remTime <= 120 && remTime > 110 ){
            message = messages[0]
        }
        else if (remTime <= 100 && remTime > 50){
            message = messages[1]
        }
        else if (remTime <= 30 && remTime > 20){
            message = messages[2]
        }
        else if (remTime === 0){
            message = messages[3]
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
    const [key, setKey] = useState(0)
    useEffect(()=>{
        setKey(skipKey)
    }, [skipKey])
    return (<>
        <div id="l">
<CountdownCircleTimer
        isPlaying={playing}
        className="x"
        duration={2}
        key={key}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
            setKey(prevKey => prevKey +1)
            setPlaying(true);
            updateIndex();
        }}
        >
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
    </>)

}

export function WorkoutArea({ workouts, instructions, gifs, setFinished, uid}) {
    const [playing, setPlaying] = useState(false);
    const [index, setIndex] = useState(0);
    const [skipKey, setSkipKey] = useState(0)
    const [outRemTime, setOutRemTime] = useState(2);
    const [finishedWorkouts, setFinishedWorkout] = useState([]);

    const Workout = () => {
        return(
            <div>
                <h1 className = "wodc"> WODC </h1>
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
            <div className="gif-wrapper"> <img className="gif" src= {gifs[index]} alt={"gif"}/></div>
            <div className = "displayMessage">{displayMessage(outRemTime, instructions[index])}</div>
            <div className="timewrapper"> 
            
                <div className="workout-index">Exercise {index + 1}/{workouts.length}</div>
                { index < 5 ?
                    <div className = "timer-button">
                        { playing ?
                            <button type="button" className="btn btn-outline-dark" onClick={() => setPlaying(false)}>Pause</button>:
                            <button type="button" className="btn btn-outline-dark" onClick={() => setPlaying(true)}>Start</button>}
                            <button type="button" className="btn btn-outline-dark" onClick={()=> {setIndex((index + 1) % 5)
                                setSkipKey(Math.floor(Math.random()*10000000))
                            }}>Next One</button>
                    </div>
                    : null
                }
                <div className="timer"> <UrgeWithPleasureComponent setOutRemTime={setOutRemTime} className="timer-component" playing={playing} updateIndex={updateIndex} setPlaying={setPlaying} skipKey={skipKey}/></div>
            </div>
        </div>

    )
}