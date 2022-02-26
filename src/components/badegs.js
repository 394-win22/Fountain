import {fetch_badges, storeBadge} from "../database/badges";
import {fetchWorkoutDate} from "../database/users";

export function UpdateBadges(uid) {
    fetchWorkoutDate(uid).then(workoutData => {
        fetch_badges(uid).then(badges => {
            const cnt = Object.keys(workoutData).length
            if (!badges["first_workout"] && cnt === 1) {
                storeBadge(uid, "first_workout").then(()=>{
                    console.log("added a first_workout badge")
                })
            }

            if (!badges["total_3_workout"] && cnt >= 3) {
                storeBadge(uid, "total_3_workout").then(()=>{
                    console.log("added a total_3_workout badge")
                })
            }

            if (!badges["3_days_streak"]) {
                let check = true;
                for (let i=0; i<3; i++) {
                    let d = new Date(Date.now());
                    d.setDate(d.getDate() - i);
                    if (!workoutData[d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate()]) {
                        check = false
                        break
                    }
                }
                if (check) {
                    storeBadge(uid, "3_days_streak").then(()=>{
                        console.log("added a 3_days_streak badge")
                    })
                }
            }
        });
    })
}