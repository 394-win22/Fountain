import {fetch_badges, storeBadge} from "../database/badges";

export function UpdateBadges(uid) {
    fetch_badges(uid).then((badges => {
        if (!badges["first_workout"]) {
            storeBadge(uid, "first_workout").then(()=>{
                console.log("added a new badge")
            })
        }
    }));
}