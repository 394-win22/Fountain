import {useParams} from "react-router-dom";
import {isValidElement, useEffect, useState} from "react";
import {get_user} from "../database/users";
import { Burger } from '../Burger/Burger';
import { Menu } from '../Menu/Menu';

export function Profile() {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [photo, setPhoto] = useState("")

    useEffect(() => {
        get_user(id).then(value =>
            {
                setName(value.val().userName)
                setEmail(value.val().userEmail)
                setPhoto(value.val().userPhoto)
            }
        );
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
                </div>
            </div>
        </div>
    )
}
