
import React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get_user} from "../database/users";
import {NextBadge} from "./nextBadge";

export function WorkoutFinished({ uid }) {
    const today = new Date(Date.now());
    const [photo, setPhoto] = useState("");
    const copyText = "I finished the fountain workout on " + today.toDateString() + "! Come and Join me: https://fountain-37243.web.app"

    useEffect(() => {
        get_user(uid).then(value => {
            setPhoto(value.userPhoto)
        });
    }, [uid]);

    return (
        <div className="startwrapper">
            <h2 style={{fontFamily:"Fredoka"}}>You did it!</h2>
            <img className = "profile-photo" src={photo} alt="UserPhoto"/>
            <h5 className="m-3" style={{fontFamily:"Fredoka"}}>Well done, youe're on track to improving your lifespan by an extra 5 years!</h5>
            <NextBadge uid={uid}/>
            <button style={{fontFamily:"Fredoka"}} type="button" className="btn btn-outline-dark m-1"  onClick={() => {
                 navigator.clipboard.writeText(copyText).then(() =>{
                    alert("copy success!");
                 })
                }}>Copy to Clipboard
            </button>
            <button style={{fontFamily:"Fredoka"}} type="button" className="btn btn-outline-dark m-1"  onClick={() => {
                 navigator.clipboard.writeText(copyText).then(() =>{
                    window.location="https://www.facebook.com/groups/fountainfit/";
                 })
                }}>Share on Fountain Facebook
            </button>
            <button style={{fontFamily:"Fredoka"}} type="button" className="btn btn-outline-dark m-1"  onClick={() => {
                    alert("This is a premium feature!")
                }}>
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
            setName(value.userName)
            setPhoto(value.userPhoto)
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
              <img src="https://firebasestorage.googleapis.com/v0/b/fountain-37243.appspot.com/o/badge1.jpg?alt=media&token=77ce3782-3428-4f95-ba5e-1567661136dc" alt="badge working towards"/>
            </div>
            <a href={"/review/"+uid}>Review Workout</a>
          </div>
        </div>
      </>
    );
  }
  
  export default Start;