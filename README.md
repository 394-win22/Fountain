# Fountain 
<img src="https://github.com/394-win22/Fountain/blob/master/src/images/Fountain-logo.png" alt="fountain-logo" width="200"/>

Fountain is a fitness app that lets you do a quick workout of the day anywhere for fun and share with anyone

[![made-with-react](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
[![Maintenance](https://img.shields.io/badge/Maintained-yes-green.svg)](https://github.com/emalderson/ThePhish)
[![Documentation](https://img.shields.io/badge/Documentation-complete-green.svg?style=flat)](https://github.com/394-win22/Fountain)

## Table of contents

* [Fountain](#Fountain)
* [How to download and install](#How-to-download-and-install)
* [Libraries](#Libraries)
* [Known bugs and issues](#Known-bugs-and-issues)
* [Non-coding steps](#Non-coding-steps)
* [Credits](#credits)

## How to download and install

To download the app, navigate to the folder where to wish to download the app to and run:

### `git clone https://github.com/394-win22/Fountain`

In the project directory, you can run:

### `npm i`

Installs all of the necessary libraries to run the app in development mode.\
This generates yout node_modules folder.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `firebase deploy`

Deploys the app to the specified firebase project.

## Libraries
Node.js 
Download [Node](https://nodejs.org/en/download/)

Run npm install [package_name] for a missing library

## Known bugs and issues
Some images could match to a wrong workout \
Some workouts do not have a corresponding gif

## Non-coding steps
### Prerequisites
Creating `.env` file under the main folder, and add your firebase SDK config under the following format:
```
REACT_APP_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
REACT_APP_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
REACT_APP_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
REACT_APP_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
REACT_APP_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
REACT_APP_APP_ID = "YOUR-PROJECT-APP-ID"
REACT_APP_MESUREMENT_ID = "YOUR-MESUREMENT_ID"
```
Upload the [defaults file](https://github.com/394-win22/Fountain/blob/master/fountainDefaults.json) to the realtime database of your firebase project.\

Add the Twilio Text Messaging add-on to your Firebase console and set up your Twilio account.


## Credits
[Kelvin Forson](https://www.linkedin.com/in/kelvin-forson-47430117a/) \
[Conor Kotwasinski](https://www.linkedin.com/in/conor-kotwasinski-86aa97200/) \
[Dong Yang](https://www.linkedin.com/in/dong-yang-05562121b/)
