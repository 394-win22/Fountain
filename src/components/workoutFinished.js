
import React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get_user} from "../database/users";
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

export function WorkoutFinished({ uid }) {
    const today = new Date(Date.now());
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

    const [photo, setPhoto] = useState("");
  
    useEffect(() => {
        get_user(uid).then(value => {
            setPhoto(value.val().userPhoto)
        });
    }, [uid]);
    return (
        <div className="startwrapper">
          
          <div>You did it!</div>
          <img className = "profile-photo" src={photo} alt="UserPhoto"/>
          <div>Well done, youe're on track to improving your lifespan by an extra 5 years!</div>
          {badges&&badgeImages? 
          <div>
            <img src={badgeImages[badgeList[nxt][0]].image} alt="badge working towards"/>
          </div> : null}
              <button type="button" className="btn btn-outline-dark"  onClick={() => {
                 navigator.clipboard.writeText("I finished the fountain workout on " + today.toDateString() + "! https://fountain-37243.web.app").then(() =>{
                    alert("copy success!"); 
                 })
                 
             }} >Copy to Clipboard
             </button>
          <button type="button" className="btn btn-outline-dark"  onClick={() => {
                 navigator.clipboard.writeText("I finished the fountain workout on " + today.toDateString() + "! https://fountain-37243.web.app").then(() =>{
                    window.location="https://www.facebook.com/groups/fountainfit/";
                 })
                 
             }}>Share on Fountain Facebook</button>
          <button type="button" className="btn btn-outline-dark"  onClick={() => {
                alert("This is a premium feature!")
            }} >
                Try a workout with a friend
            </button>
          
        </div>
    );
}

function Start() {
    const { uid } = useParams();
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
  
    useEffect(() => {
        get_user(uid).then(value => {
            setName(value.val().userName)
            setPhoto(value.val().userPhoto)
        });
    }, [uid]);
    return (
      <>
        <div className="startwrapper">
          
          <div>Welcome back {name ? name : "NULL"}!</div>
          <img className = "profile-photo" src={photo} alt="UserPhoto"/>
          <div>Workout Of The Day Challenge (WODC)</div>
  
          <a className="startbutton" href={"/countdown/"+uid}>Start</a>
          <div className="card m-1 p-2 startwrapper"> 
            <div>
              Complete this class and earn your two week acheivement badge!
            </div>
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/fountain-37243.appspot.com/o/badge1.jpg?alt=media&token=77ce3782-3428-4f95-ba5e-1567661136dc"alt="badge working towards"/>
            </div>
            <a href={"/preview/"+uid}>Review Workout</a>
          </div>
        </div>
      </>
    );
  }
  
  export default Start;