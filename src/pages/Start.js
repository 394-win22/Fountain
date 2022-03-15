import React from "react";
import {useEffect, useState} from "react";
import {get_user} from "../database/users";
import {NextBadge} from "../components/nextBadge";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {firebase} from "../database/firebase";

function Start({ UID }) {
    const [uid, setUid] = useState(UID);
    const [name, setName] = useState();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        const auth = getAuth(firebase);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
            }
        })
        get_user(uid).then(value => {
          setName(value.userName)
          setPhoto(value.userPhoto)
        });
    }, [uid]);

    return (
        <div data-cy="Start" className="startwrapper">
            <div className="welcome-back">Welcome back {name ? name : "NULL"}!</div>
            <img className="profile-photo" src={photo} alt="UserPhoto"/>
            <div className="wodc-start">Workout Of The Day Challenge (WODC)</div>

            <a data-cy="Start-Button" className="startbutton" href={"/countdown/"}>Begin Workout of the Day</a>
            <NextBadge uid={uid} containReview={true}/>
        </div>
    );
}

export default Start;
