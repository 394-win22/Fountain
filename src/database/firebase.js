// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {firebaseConfig} from "../ENV";

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getDatabase();
