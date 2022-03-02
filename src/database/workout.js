import {get, ref} from "firebase/database";
import {db} from "./firebase";


export async function fetch_workouts() {
    const path = '/workouts';
    return await get(ref(db, path)).then((snapshot) => {
        const workOutsArray = [];
        snapshot.forEach((val) => {
            workOutsArray.push(val.val());
        });
        return workOutsArray;
    }).catch((error) => {
        console.error(error);
    });
}



export function pseudorandom(seed, iteration) {

    seed = Math.abs(seed % 2147483647) + 1;
    for (let i = 0; i < iteration +1; i++)
    {
        seed = seed * 1344564785924 % 2147483647;
    }

    seed = (seed - 1) /2147483646;

    return seed;
}

export async function fetch_instructions(workoutNumber) {
    const path = '/workouts/'+workoutNumber;
    return await get(ref(db, path)).then((snapshot) => {
        return snapshot.val().Instructions;
    }).catch((error) => {
        console.error(error);
    });
}



