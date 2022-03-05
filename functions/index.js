const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase app for database access
admin.initializeApp();
const db = admin.firestore()

exports.scheduledFunctionCrontab = functions.runWith({ memory: '2GB' })
    .pubsub.schedule("18 15 * * *")
    .timeZone("America/Chicago")
    .onRun(async (context) => {
    const writeResult = await db.collection('messages').add({to: "+17088343108", from: "+18623622582", body: "testing if message sent from fountain" });
      console.log("This sent a message!!");
      return null;
    });


