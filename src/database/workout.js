import {firebase} from './firebase'
import {useState, useEffect} from "react";
import {child, get, orderByChild, ref, set, remove, update} from "firebase/database";
import {db} from "./firebase";




export async function fetch_workouts() {
    const path = '/';
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