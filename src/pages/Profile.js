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
    const [inputNumber, setNumber] = useState()
    const [disable, setDisable] = useState(true)

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
                    <div data-cy="UserName" style={{fontFamily:"Fredoka"}}>Your Name: {name ? name : "NULL"}</div>
                    <div style={{fontFamily:"Fredoka"}}>Your email: {email ? email : "NULL"}</div>
                    <div data-cy="UserNumber" style={{fontFamily:"Fredoka"}}>Your Number:
                        {disable? phoneNumber :
                            <>
                                <input data-cy="InputNumber" defaultValue={phoneNumber} type="text" name="number"
                                       onChange={
                                           number => setNumber(number.target.value)
                                       }/>
                                <button data-cy="UpdateButton" onClick={() => {
                                            add_number(uid, inputNumber);
                                            window.location.reload()
                                }}>Update</button>
                            </>
                        }
                        <button data-cy="EditButton" ><i className="bi bi-pencil-fill" onClick={() => setDisable(!disable)}/></button>
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
