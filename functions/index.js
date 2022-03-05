const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase app for database access
admin.initializeApp();

exports.scheduledFunctionCrontab = functions.pubsub.schedule("45 14 * * *")
    .timeZone("America/Chicago")
    .onRun((context) => {
    const writeResult = await admin.firestore().collection('messages').add({to: "+17088343108", from: "+18623622582", body: "testing if message sent from fountain" });
      console.log("This sent a message!!");
      return null;
    });


