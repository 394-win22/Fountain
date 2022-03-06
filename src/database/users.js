import {getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
import {firebase} from './firebase'
import {useState, useEffect} from "react";
import { get, ref, update} from "firebase/database";
import {db} from "./firebase";


export const signInWithGoogle = async () => {
    return await signInWithPopup(getAuth(firebase), new GoogleAuthProvider()).then(
        (result) => {
            return [result.user.uid,  result.user.email, result.user.displayName, result.user.photoURL];
        }
    )
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useUserState = ({setUEmail, setUName, setUid}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const auth = getAuth(firebase);
        onIdTokenChanged(auth, setUser);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUEmail(user.email)
                setUName(user.displayName)
                setUid(user.uid)
            }
        })
    }, [setUEmail, setUName, setUid]);

    return [user];
};

export function make_user(uid, name, email, photoUrl){
    update(ref(db, 'users/' + uid), {
        userID: uid,
        userName: name,
        userEmail: email,
        userPhoto: photoUrl
    }).then(() => {
    }).catch((error) => {
        console.log(error);
    });
}

export function add_number(uid, phoneNumber){
    update(ref(db, 'users/' + uid), {
        userPhoneNumber:phoneNumber
    }).then(() => {
    }).catch((error) => {
        console.log(error);
    });
}

export async function get_user(uid) {
    return await get(ref(db, `users/` + uid)).then((snapshot) => {
        return snapshot;
    }).catch((error) => {
        console.error(error);
    })
}

export function set_feeling(user_feeling, UName, UEmail){
    console.log("set feeling");
    const user= UEmail.replaceAll(".", "_");
    update(ref(db, 'users/' + user), {
        feeling: user_feeling,
    }).then(() => {
    }).catch((error) => {
        console.log(error);
    });  

}

export function set_exercise_type(exercise_type, UName, UEmail){
    console.log("set exercise type");
    const user= UEmail.replaceAll(".", "_");
    update(ref(db, 'users/' + user), {
        exercise_type: exercise_type,
    }).then(() => {
    }).catch((error) => {
        console.log(error);
    });  

}

export function set_injury_type(injury_type, UName, UEmail){
    console.log("set injury type");
    const user= UEmail.replaceAll(".", "_");
    update(ref(db, 'users/' + user), {
        injury_type: injury_type,
    }).then(() => {
    }).catch((error) => {
        console.log(error);
    });  

}

export function set_injury_location(injury_location, UName, UEmail){
    console.log("set injury loc");
    const user= UEmail.replaceAll(".", "_");
    update(ref(db, 'users/' + user), {
        injury_location: injury_location,
    }).then(() => {
    }).catch((error) => {
        console.log(error);
    });  

}

export async function storeWorkoutDate(uid) {
    const today = new Date(Date.now());
    return await update(ref(db, 'users/' + uid + "/workouts/"), {
        [today.getFullYear() + "_" + today.getMonth() + "_" + today.getDate()]: "None",
    }).catch((error) => {
        console.log(error);
    });
}

export async function fetchWorkoutDate(uid) {
    return await get(ref(db, 'users/' + uid + "/workouts/")).then(snapshot => {
        return snapshot.val()
    }).catch((error) => {
        console.log(error);
    });
}

export async function get_phone_numbers() {
    let phoneNumbers=[];
    return await get(ref(db, 'users/')).then(snapshot => {
        snapshot.forEach((child) => {
            if (child.val().userPhoneNumber){
                phoneNumbers.push(child.val().userPhoneNumber)
            }
          });
        return phoneNumbers;
    }).catch((error) => {
        console.log(error);
    });
}




