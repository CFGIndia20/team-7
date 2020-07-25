const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const twilio = require('twilio');



const accountSid = process.env.accountSid;
const authToken = process.env.authToken;

