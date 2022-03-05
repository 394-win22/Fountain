import React from "react";
import {fetch_workouts} from "../database/workout";
import {useEffect, useState} from 'react';
import {WorkoutArea} from "../components/workoutArea";
import {WorkoutFinished} from "../components/workoutFinished";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {firebase} from "../database/firebase";

function Home({ UID }) {
    const [uid, setUID] = useState(UID);
    const [instructions, setInstructions] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [gifs, setGifs] = useState([]);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const auth = getAuth(firebase);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUID(user.uid);
            }
        })
        fetch_workouts().then(value => {
            let workOutArr = [];
            let gifArr = [];
            let instructionsArr = [];
            Object.values(value).forEach((val) => {
                workOutArr.push(val["Exercise Name"])
                gifArr.push(val["Image"])
                instructionsArr.push(val["Instructions"])
            })
            setInstructions(instructionsArr);
            setWorkouts(workOutArr);
            setGifs(gifArr)
        })
    }, []);
    

    return (
        <div className="home-wrapper m-3">
            {finished ?
                <WorkoutFinished uid={uid} />
                : <WorkoutArea workouts={workouts} instructions={instructions} gifs={gifs} setFinished={setFinished} uid={uid}/>
            }
        </div>
    );
}



export default Home;