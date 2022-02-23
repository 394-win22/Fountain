import {useParams} from "react-router-dom";
import {isValidElement, useEffect, useState} from "react";
import {get_user} from "../database/users";
import { Burger } from '../Burger/Burger';
import { Menu } from '../Menu/Menu';
import{fetch_badges, fetch_badge_image} from "../database/badges";
import { object } from "prop-types";

export function Profile() {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [photo, setPhoto] = useState("")
    const [badges, setBadges] = useState("")
    const [badgeImages, setBadgeImages] = useState("")


    useEffect(() => {
        get_user(id).then(value =>
            {
                setName(value.val().userName)
                setEmail(value.val().userEmail)
                setPhoto(value.val().userPhoto)
            }
        );
        fetch_badges(id).then(value =>
            { 
                let imageDict = {};
                const keys= Object.keys(value);
                keys.map(key => {
                    fetch_badge_image(key).then(value=>{
                        imageDict[key] = value.val().image;
                    })
                }); 
                setBadgeImages(imageDict);
                console.log(badgeImages);
                
            })
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6" id ="profile-photo-container">
                    <img className = "profile-photo" src={photo} alt="UserPhoto"/>
                </div>
                <div className="col-sm-6">
                    <div>Your Name: {name ? name : "NULL"}</div>
                    <div>Your email: {email ? email : "NULL"}</div>
                    <div className = "badges"> {Object.keys(badgeImages).map(key => <div>{key}</div>)} </div>
                </div>
            </div>
        </div>
    )
}
