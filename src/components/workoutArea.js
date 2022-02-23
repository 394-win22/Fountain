import React, {useState} from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {storeWorkoutDate} from "../database/users";

function UrgeWithPleasureComponent({playing, updateIndex, setPlaying}){
    const [key, setKey] = useState(0)
    return (<CountdownCircleTimer
        isPlaying={playing}
        duration={1}
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
            if (seconds <10){
                seconds = "0"+seconds;
            }
            return `${minutes}:${seconds}`}
        }
    </CountdownCircleTimer>)
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
        }
        setIndex(index + 1);
    }

    return (
        <div>
            <Workout />
            <div className="gif-wrapper"> <img className="gif" src= {gifs[index]}></img></div>
            <div className="timer-wrapper">
                { index < 5 ?
                    <div className = "timer-button">
                        { playing ?
                            <button type="button" className="btn btn-outline-dark" onClick={() => setPlaying(false)}>Pause</button>:
                            <button type="button" className="btn btn-outline-dark" onClick={() => setPlaying(true)}>Start</button>}
                    </div>
                    : null
                }
                <div className="workout-index">{index + 1}/{workouts.length}</div> 
                <div className="timer"> <UrgeWithPleasureComponent className="timer-component" playing={playing} updateIndex={updateIndex} setPlaying={setPlaying}/></div>
            </div>
        </div>

    )
}