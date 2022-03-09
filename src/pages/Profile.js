import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get_user} from "../database/users";
import {add_number} from "../database/users";
import {fetch_badges, fetch_badge_image} from "../database/badges";

export function Profile() {
    const { uid } = useParams()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [photo, setPhoto] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [badges, setBadges] = useState()
    const [badgeImages, setBadgeImages] = useState()

    useEffect(() => {
        get_user(uid).then(value => {
            setName(value.userName)
            setEmail(value.userEmail)
            setPhoto(value.userPhoto)
            setPhoneNumber(value.userPhoneNumber)

        });
        fetch_badges(uid).then(value => {
            setBadges(value);
        });
        fetch_badge_image().then(value => {
            setBadgeImages(value);
        });
    }, [uid]);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6" id ="profile-photo-container">
                    <img className = "profile-photo" src={photo} alt="UserPhoto"/>
                </div>
                <div className="col-sm-6">
                    <div data-testid="UserName">Your Name: {name ? name : "NULL"}</div>
                    <div>Your email: {email ? email : "NULL"}</div>
                    <div> Your Number: {phoneNumber? phoneNumber: 
                    <form>
                        <label>
                            <input type="text" name="number" onChange={number => add_number(uid,number.target.value)}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>}
                    </div>
                    {badges && badgeImages? <div> {Object.keys(badges).map(key => {
                        return <img src={badgeImages[key].image} width="100" alt={key}/>
                    })} </div> : null}
                    {badges && badgeImages? <div> {Object.keys(badgeImages).map(key => {
                        if (!badges[key]) {
                            return <img src={badgeImages[key].image} width="100" alt={key} style={{"filter": "grayscale(100%)"}} />
                        }
                        return null
                    })} </div> : null}
                </div>
            </div>
        </div>
    )
}
