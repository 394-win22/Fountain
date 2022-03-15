// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { attachCustomCommands } from "cypress-firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBrdAd_lEPfVkWhxoW7PRcwPUtA23SODCo",
    authDomain: "fountain-37243.firebaseapp.com",
    projectId: "fountain-37243",
    storageBucket: "fountain-37243.appspot.com",
    messagingSenderId: "41981661006",
    appId: "1:41981661006:web:aa4d5d88618760848e981f",
    measurementId: "G-M8XXSWX2D8"
  };

  firebase.initializeApp(firebaseConfig);

attachCustomCommands({ Cypress, cy, firebase });
  
