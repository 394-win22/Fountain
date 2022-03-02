import React from "react";
import {fetch_workouts} from "../database/workout";
import {useEffect, useState} from 'react';
import {WorkoutArea} from "../components/workoutArea";
import {WorkoutFinished} from "../components/workoutFinished";
import {useParams} from "react-router-dom";

function Home() {
    const { uid } = useParams()
    const [workoutNumbers, setWorkoutNumbers] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [gifs, setGifs] = useState([]);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        fetch_workouts().then(value => {
            // let random = value.sort(() => .5 - Math.random()).slice(0,5);
            // const workOutArr = random.map(x => x["Exercise Name"]);
            // setWorkouts(workOutArr);

            //hardcode in workout for now
            setWorkoutNumbers([26,3,0,10,32]);
            const workOutArr = [value[26]["Exercise Name"], value[3]["Exercise Name"], value[0]["Exercise Name"], value[10]["Exercise Name"], value[32]["Exercise Name"]];
            setWorkouts(workOutArr);
            const gifArr = [value[26]["Image"], value[3]["Image"], value[0]["Image"], value[10]["Image"], value[32]["Image"]];
            setGifs(gifArr)
    })
    }, []);
    

    return (
        <div className="home-wrapper m-3">
            {finished ?
                <WorkoutFinished />
                : <WorkoutArea workouts={workouts} workoutNumbers={workoutNumbers} gifs={gifs} setFinished={setFinished} uid={uid}/>
            }
        </div>
    );
}



export default Home;