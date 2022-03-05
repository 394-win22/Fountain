import {get, ref, update} from "firebase/database";
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
            if (retArray.length === 0) {
                const ret = generate(path, workOutsArray);
                Object.values(ret).forEach((value => {
                    retArray.push(workOutsArray[value]);
                }))
            }
            return retArray;
        }).catch((error) => {
            console.error(error);
        });
    }).catch((error) => {
        console.error(error);
    });
}

function generate(path, workoutArray) {
    let date1 = new Date("03/01/2022");
    const today = new Date(Date.now());
    let diffdays = Math.round( (today - date1) / (1000 * 3600 * 24));

    let workOutArr = {}
    let dic = {}
    let cnt = 0;
    for (let i = 1; i < 6; i++) {
        let rdm = Math.round(workoutArray.length * pseudorandom(diffdays, cnt + i));
        while (!workoutArray[rdm]["Image"] || !workoutArray[rdm]["Instructions"] || dic[rdm]) {
            cnt ++
            rdm = Math.round(workoutArray.length * pseudorandom(diffdays, cnt + i))
        }
        workOutArr[i] = rdm
        dic[rdm] = true
    }

    update(ref(db, path), workOutArr).catch((error) => {
        console.log(error);
    });
    return workOutArr
}

function pseudorandom(seed, iteration) {
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



