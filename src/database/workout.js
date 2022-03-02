import {get, ref} from "firebase/database";
import {db} from "./firebase";


export async function fetch_workouts() {
    const today = new Date(Date.now());
    const path = '/workoutList/' + today.getFullYear() + "_" + today.getMonth() + "_" + today.getDate();
    return await get(ref(db, path)).then(async (snapshot) => {
        return await get(ref(db, '/workouts')).then((workouts) => {
            const workOutsArray = [];
            const retArray = [];
            workouts.forEach((val) => {
                workOutsArray.push(val.val());
            });
            snapshot.forEach((val) => {
                retArray.push(workOutsArray[val.val()]);
            });
            // if (retArray.length === 0) {
            //    generate();
            // }
            return retArray;
        }).catch((error) => {
            console.error(error);
        });
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



