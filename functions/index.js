const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase app for database access
admin.initializeApp();

exports.scheduledFunctionCrontab = functions.pubsub.schedule("25 14 * * *")
    .timeZone("America/Chicago")
    .onRun((context) => {
      console.log("This will be run every day at 11:05 AM Eastern!");
      return null;
    });


