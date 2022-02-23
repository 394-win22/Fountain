import {child, get, orderByChild, ref, set, remove, update} from "firebase/database";
import {db} from "./firebase";

export async function fetch_badges() {
    const path = '/badges';
    return await get(ref(db, path)).then((snapshot) => {
        const badgesArray = [];
        snapshot.forEach((val) => {
            badgesArray.push(val.val());
        });
        return badgesArray;
    }).catch((error) => {
        console.error(error);
    });
}