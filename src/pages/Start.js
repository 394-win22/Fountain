import React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get_user} from "../database/users";

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
        <a className="startbutton" href="/countdown">Begin Workout of the Day</a>
        <div className="card m-1 p-2 startwrapper"> 
          <div>
            Complete this class and earn your two week acheivement badge!
          </div>
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/fountain-37243.appspot.com/o/badge1.jpg?alt=media&token=77ce3782-3428-4f95-ba5e-1567661136dc"alt="badge working towards"/>
          </div>
          <a href="/home">Review Workout</a>
        </div>
      </div>
    </>
  );
}

export default Start;
