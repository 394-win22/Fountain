import React, {useState, useEffect} from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {storeWorkoutDate} from "../database/users";
import {UpdateBadges, updateBadges} from "./badegs";

function displayMessage (remTime){
    let message = null;
    const messages = ["Let's get started on this",
        "You're almost there",
        "Finish Strong",
        "Way to go"]

    if (remTime <= 120 && remTime > 110 ){
        message = messages[0]
    }
    else if (remTime <= 60 && remTime > 50){
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
            {message }
        </div>
    )
}

function UrgeWithPleasureComponent({playing, updateIndex, setPlaying}){
    const [remTime, setRemTime] = useState(2);
    const [key, setKey] = useState(0)
    return (<>
<CountdownCircleTimer
        isPlaying={playing}
        duration={120}
        key={key}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
            setKey(prevKey => prevKey +1)
            setPlaying(false);
            updateIndex();
        }}
        >
        {({ remainingTime }) =>  {
            const minutes = Math.floor(remainingTime / 60);
            let seconds = remainingTime % 60;
            setRemTime((minutes*60) + seconds)
            if (seconds <10){
                seconds = "0"+seconds;
            }
            return `${minutes}:${seconds}`}
        }
    </CountdownCircleTimer>
    {displayMessage(remTime)}
    </>)

}

export function WorkoutArea({ workouts, gifs, setFinished, uid}) {
    const [playing, setPlaying] = useState(false);
    const [index, setIndex] = useState(0);

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
    }

    return (
        <div>
            <Workout />
            <div className="gif-wrapper"> <img className="gif" src= {gifs[index]}></img></div>
            <div className="timewrapper">

                <div className="workout-index">Exercise {index + 1}/{workouts.length}</div>
                { index < 5 ?
                    <div className = "timer-button">
                        { playing ?
                            <button type="button" className="btn btn-outline-dark" onClick={() => setPlaying(false)}>Pause</button>:
                            <button type="button" className="btn btn-outline-dark" onClick={() => setPlaying(true)}>Start</button>}
                    </div>
                    : null
                }
                <div className="timer"> <UrgeWithPleasureComponent className="timer-component" playing={playing} updateIndex={updateIndex} setPlaying={setPlaying}/></div>
            </div>
        </div>

    )
}
