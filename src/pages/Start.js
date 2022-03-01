import React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get_user} from "../database/users";
import {NextBadge} from "../components/nextBadge";

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
        
        <div className="welcome-back">Welcome back {name ? name : "NULL"}!</div>
        <img className = "profile-photo" src={photo} alt="UserPhoto"/>
        <div className="wodc-start">Workout Of The Day Challenge (WODC)</div>

        <a className="startbutton" href={"/countdown/"+uid}>Begin Workout of the Day</a>
        <NextBadge uid={uid}/>
      </div>
    </>
  );
}

export default Start;
