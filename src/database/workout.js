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

