import {getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
import {firebase} from './firebase'
import {useState, useEffect} from "react";
import {child, get, orderByChild, ref, set, remove, update} from "firebase/database";
import {db} from "./firebase";

export const signInWithGoogle = async () => {
    return await signInWithPopup(getAuth(firebase), new GoogleAuthProvider()).then(
        (result) => {
            return [result.user.email, result.user.displayName, result.user.photoURL];
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
    }, []);

    return [user];
};

export function make_user(UName, UEmail){
            const user= UEmail.replaceAll(".", "_");
            set(ref(db, 'users/' + user), {
                username: UName,
                user_email: UEmail,
            }).then(() => {
            }).catch((error) => {
                console.log(error);
            });  
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


