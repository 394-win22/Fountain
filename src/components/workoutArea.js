import React, {useState} from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";

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

export function WorkoutArea({ workouts, setFinished}) {
    const [playing, setPlaying] = useState(false);
    const [index, setIndex] = useState(0);

    const Workout = () => {
        return(
            <div>{index + 1}/{workouts.length} {workouts[index]}</div>
        )
    }

    const updateIndex = () => {
        if (index + 1 >= workouts.length) {
            setFinished(true)
        }
        setIndex(index + 1);
    }

    return (
        <div>
            <Workout />
            { index < 5 ?
                <div>
                    { playing ?
                        <button onClick={() => setPlaying(false)}>Pause</button>:
                        <button onClick={() => setPlaying(true)}>Start</button>}
                </div>
                : null
            }
            <UrgeWithPleasureComponent playing={playing} updateIndex={updateIndex} setPlaying={setPlaying}/>
        </div>
    )
}