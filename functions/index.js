const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase app for database access
admin.initializeApp();
const db = admin.firestore()
const userDb = admin.database()

async function get_phone_numbers() {
  let phoneNumbers=[];
  return admin.database().ref('users/').once('value').then(function(snapshot) {
    snapshot.forEach((child) => {
      if (child.val().userPhoneNumber){
          phoneNumbers.push(child.val().userPhoneNumber)
        }
      });
    return phoneNumbers;
  });
}

exports.scheduledFunctionCrontab = functions.runWith({ memory: '2GB' })
    .pubsub.schedule("20 18 * * *")
    .timeZone("America/Chicago")
    .onRun(async (context) => {
      const promises = [];
      get_phone_numbers().then(phoneNumbers =>{
        console.log(phoneNumbers);
        for (const number of phoneNumbers){
          console.log(number);
          promises.push(db.collection('messages').add({to: "+1"+number, from: "+18623622582", body: "Today’s daily workout of the day has just been posted. Click here to start! https://fountain-37243.web.app" })); 
        }
      });
      await Promise.all(promises);
      console.log("This sent a message!!");
      return null; 
    });


