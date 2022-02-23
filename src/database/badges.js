import { get, ref, update} from "firebase/database";
import {db} from "./firebase";

export async function fetch_badges(uid) {
    const path = 'users/' + uid + '/badges';
    return await get(ref(db, path)).then((snapshot) => {
        const badgesDic = {};
        snapshot.forEach((val) => {
            badgesDic[val.key] = val.val();
        });
        return badgesDic;
    }).catch((error) => {
        console.error(error);
    });
}

export async function fetch_badge_image() {
    const path = '/badges/';
    return await get(ref(db, path)).then((snapshot) => {
        const ImgDic = {};
        snapshot.forEach((val) => {
            ImgDic[val.key] = val.val();
        });
        return ImgDic;
    }).catch((error) => {
        console.error(error);
    });
}

export async function storeBadge(uid, badgeName) {
    const today = new Date(Date.now());
    return await update(ref(db, 'users/' + uid + "/badges/"), {
        [badgeName]: [today.getFullYear() + "_" + today.getMonth() + "_" + today.getDate()] + "",
    }).catch((error) => {
        console.log(error);
    });
}
