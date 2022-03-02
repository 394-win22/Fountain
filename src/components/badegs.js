import {fetch_badges, storeBadge} from "../database/badges";
import {fetchWorkoutDate} from "../database/users";
import {log} from "@tensorflow/tfjs";

export function UpdateBadges(uid) {
    fetchWorkoutDate(uid).then(workoutData => {
        fetch_badges(uid).then(badges => {
            const cnt = Object.keys(workoutData).length
            if (!badges["first_workout"] && cnt === 1) {
                storeBadge(uid, "first_workout").then(()=>{
                    console.log("added a first_workout badge")
                })
            }

            if (!badges["second_workout"] && cnt >= 2) {
                storeBadge(uid, "second_workout").then(()=>{
                    console.log("added a second_workout badge")
                })
            }

            if (!badges["5_workouts"] && cnt >= 5) {
                storeBadge(uid, "5_workouts").then(()=>{
                    console.log("added a 5_workouts badge")
                })
            }

            if (!badges["10_workouts"] && cnt >= 10) {
                storeBadge(uid, "10_workouts").then(()=>{
                    console.log("added a 10_workouts badge")
                })
            }

            if (!badges["25_workouts"] && cnt >= 25) {
                storeBadge(uid, "25_workouts").then(()=>{
                    console.log("added a 25_workouts badge")
                })
            }

            if (!badges["50_workouts"] && cnt >= 50) {
                storeBadge(uid, "50_workouts").then(()=>{
                    console.log("added a 50_workouts badge")
                })
            }

            if (!badges["100_workouts"] && cnt >= 100) {
                storeBadge(uid, "100_workouts").then(()=>{
                    console.log("added a 100_workouts badge")
                })
            }

            for (let i = 1; i <= 25; i++) {
                let d = new Date(Date.now());
                d.setDate(d.getDate() - (i - 1));
                if (!workoutData[d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate()]) {
                    break
                }

                if (!badges["2_in_a_row"] && i === 2) {
                    storeBadge(uid, "2_in_a_row").then(()=>{
                        console.log("added a 2_in_a_row badge")
                    })
                }

                if (!badges["5_in_a_row"] && i === 5) {
                    storeBadge(uid, "5_in_a_row").then(()=>{
                        console.log("added a 5_in_a_row badge")
                    })
                }

                if (!badges["7_in_a_row"] && i === 7) {
                    storeBadge(uid, "7_in_a_row").then(()=>{
                        console.log("added a 7_in_a_row badge")
                    })
                }

                if (!badges["10_in_a_row"] && i === 10) {
                    storeBadge(uid, "10_in_a_row").then(()=>{
                        console.log("added a 10_in_a_row badge")
                    })
                }

                if (!badges["14_in_a_row"] && i === 14) {
                    storeBadge(uid, "14_in_a_row").then(()=>{
                        console.log("added a 14_in_a_row badge")
                    })
                }

                if (!badges["21_in_a_row"] && i === 21) {
                    storeBadge(uid, "21_in_a_row").then(()=>{
                        console.log("added a 21_in_a_row badge")
                    })
                }

                if (!badges["25_in_a_row"] && i === 25) {
                    storeBadge(uid, "25_in_a_row").then(()=>{
                        console.log("added a 25_in_a_row badge")
                    })
                }
            }
        });
    })
}