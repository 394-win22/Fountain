
import React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get_user} from "../database/users";

export function WorkoutFinished({ uid }) {
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
          <img src="https://firebasestorage.googleapis.com/v0/b/fountain-37243.appspot.com/o/badge1.jpg?alt=media&token=77ce3782-3428-4f95-ba5e-1567661136dc"alt="badge working towards"/>
          <a className="startbutton" href="https://www.facebook.com/groups/fountainfit/">Share on Fountain Facebook</a>
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
  
          <a className="startbutton" href={"/countdown/"+uid}>Begin Workout of the Day</a>
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