import React, {useEffect, useState} from "react";
import {fetch_badge_image, fetch_badges} from "../database/badges";

const badgeList = [
    ["first_workout", "First Workout"],
    ["second_workout","Second Workout"],
    ["2_in_a_row","2 Days Streak"],
    ["5_in_a_row","5 Days Streak"],
    ["5_workouts","5 Total Workouts"],
    ["7_in_a_row","7 Days Streak"],
    ["10_workouts","10 Total Workouts"],
    ["14_in_a_row","14 Days Streak"],
    ["21_in_a_row","21 Days Streak"],
    ["25_in_a_row","25 Days Streak"],
    ["25_workouts","25 Total Workouts"],
    ["50_workouts","50 Total Workouts"],
    ["100_workouts","100 Total Workouts"],
]

export function NextBadge({ uid, containReview}) {
    const [badges, setBadges] = useState()
    const [badgeImages, setBadgeImages] = useState()
    const [nxt, setNxt] = useState(0)

    useEffect(() => {
        fetch_badges(uid).then(value => {
            setBadges(value);
            for (let i = 0; i < badgeList.length; i ++) {
                if (!value[badgeList[i][0]]) {
                    setNxt(i);
                    break;
                }
            }
        });
        fetch_badge_image().then(value => {
            setBadgeImages(value);
        });
    }, [uid]);

    return (
        <div >
            {badges&&badgeImages?
                <div className="card m-1 p-2 startwrapper">
                    {containReview ?
                        <div style={{fontFamily:"Fredoka"}}>Complete this class and earn your "{badgeList[nxt][1]}" badge!</div> :
                        <div style={{fontFamily:"Fredoka"}}>Your next Badge</div>
                    }
                    <img src={badgeImages[badgeList[nxt][0]].image} alt="badge working towards" height="200px" />
                    {containReview ? <a className="reviewbutton" href={"/review/"}>Review Workout</a>:null}
                </div>
                : null
            }
        </div>
    )
}