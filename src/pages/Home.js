import React from "react";
import {fetch_workouts, pseudorandom} from "../database/workout";
import {useEffect, useState} from 'react';
import {WorkoutArea} from "../components/workoutArea";
import {WorkoutFinished} from "../components/workoutFinished";
import {useParams} from "react-router-dom";

function Home() {
    const { uid } = useParams()
    const [workouts, setWorkouts] = useState([]);
    const [gifs, setGifs] = useState([]);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        fetch_workouts().then(value => {
            // let random = value.sort(() => .5 - Math.random()).slice(0,5);
            // const workOutArr = random.map(x => x["Exercise Name"]);
            // setWorkouts(workOutArr);
            let date1 = new Date("03/01/2022");
            const d = new Date();
            let time = d.getTime();
            let difference = time - date1;
            let diffdays = Math.round(difference / (1000 * 3600 * 24));
            //hardcode in workout for now
            let workOutArr = []
            let gifArr = []
            for (let i = 1; i < 6; i++)
            {
                workOutArr.push(value[parseInt(60*pseudorandom(diffdays,i))]["Exercise Name"]);
                gifArr.push(value[parseInt(60*pseudorandom(diffdays,i))]["Image"])
            }
            
            setWorkouts(workOutArr);
            setGifs(gifArr)
            
    })
    }, []);
    

    return (
        <div className="home-wrapper m-3">
            {finished ?
                <WorkoutFinished />
                : <WorkoutArea workouts={workouts} gifs={gifs} setFinished={setFinished} uid={uid}/>
            }
        </div>
    );
}



export default Home;