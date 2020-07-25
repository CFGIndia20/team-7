// const functions = require('firebase-functions');
// const firebase = require('firebase-admin');
// const sendMsg= require('./twilio');
// const replyRecieve = require('./reply_to_msgs');
// const firebaseApp=firebase.initializeApp(
//     functions.config().firebase
// );


// exports.sendMsg=sendMsg.sendMessage;
// console.log(replyRecieve);
// exports.replyRecieve=functions.https.onRequest(replyRecieve);



require('dotenv').config();
const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const app = express();
const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
firebase.initializeApp();


app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
  
    twiml.message('This is in reply to your message!');
  
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });
  
//   http.createServer(app).listen(1337, () => {
//     console.log('Express server listening on port 1337');
//   });
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;

app.get('/send_msg', (req, res) => {
    const client = require('twilio')(accountSid, authToken);
    return client.messages
        .create({
            body: 'Test message from twilio',
            from: '+19193360752',//Number assigned from twilio can be used by NGO as their own number
            to: '+919820054228' //who to send the sms to
        }).then(msg=>console.log(msg.sid));
  });


const sendMessage = function (msgBody) {
    const client = require('twilio')(accountSid, authToken);

    return client.messages
        .create({
            body: 'Test message from twilio',
            from: '+19193360752',//Number assigned from twilio can be used by NGO as their own number
            to: '+919820054228' //who to send the sms to
        }).then(msg=>console.log(msg.sid));
};
// module.exports = sendMessage;

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
// app.listen(8000);












// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
