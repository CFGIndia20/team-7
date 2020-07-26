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
const twilio = require('twilio');

const { ref } = require('firebase-functions/lib/providers/database');
const { strict } = require('assert');
firebase.initializeApp();
const db = firebase.firestore();

const qn=0;
let responseTo='responseTo'
let response ='';
ans='Thank you for using St.Jude\'s facilities!\nFeedback form for unit 1:\nA. On a scale of 1 to 5 how clean was the unit? SMS A<YOUR_RATING>'
function getMsg(qn){
    switch(qn){
        case 0:
           return 'Thank you for using St.Jude\'s facilities!\nFeedback form for unit 1:\nA. On a scale of 1 to 5 how clean was the unit? SMS A<YOUR_RATING>'
            break;
        case 1:
            return 'B. On a scale of 1 to 5 how were the sleeping conditions? SMS B<YOUR_RATING>'
            break;
        case 2:
            return 'C. On a scale of 1 to 5 how were the ration supplies? SMS C<YOUR_RATING>'
            break;
        case 3:
            return 'D. On a scale of 1 to 5 how was the hospitability? SMS D<YOUR_RATING>'
            break;
        default:
            return 'Thank you for using St.Jude\'s facilities!\nFeedback form for unit 1:\nA. On a scale of 1 to 5 how clean was the unit? SMS A<YOUR_RATING>'
            break;
    }
    
}

async function readFlag()
{
    await db.collection('users').doc("+919820054228").get().then(doc=>{
        functions.logger.log("+919820054228"+" doc:  "+ doc);
        if(doc.exists){
            qn=doc.data.question_no;
            responseTo+=''+qn;
            response=req.body;
            ans=getMsg(qn);
            db.collection('users').doc("+919820054228").set(newval).then(()=>{
                console.log("Answering succesfully!");
            })
        }
        else{
            newval={
                'question_no':0,
                 responseTo:response
                
            }
            db.collection('users').doc("+919820054228").set(newval).then(()=>{
                console.log("Answering succesfully!");
            })
            functions.logger.log("+919820054228"+"doesnt exist");
        }
    });
}
app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    readFlag();
    // switch(qn){
    //     case 0:
    //         twiml.message('Thank you for using St.Jude\'s facilities!\nFeedback form for unit 1:\nA. On a scale of 1 to 5 how clean was the unit? SMS A<YOUR_RATING>');
    //         break;
    //     case 1:
    //         twiml.message('B. On a scale of 1 to 5 how were the sleeping conditions? SMS B<YOUR_RATING>');
    //         break;
    //     case 2:
    //         twiml.message('C. On a scale of 1 to 5 how were the ration supplies? SMS C<YOUR_RATING>');
    //         break;
    //     case 3:
    //         twiml.message('D. On a scale of 1 to 5 how was the hospitability? SMS D<YOUR_RATING>');
    //         break;
    // }
    // newval={
    //     'question_no':qn+1,
    //      responseTo:response
        
    // }
    
    // newval={
    //     'question_no':qn+1,
    //      responseTo:response
        
    // }
    // db.collection('users').doc("+919820054228").set(newval).then(()=>{
    //     console.log("Answering succesfully!");
    // });

    twiml.message(ans);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });
  
//   http.createServer(app).listen(1337, () => {
//     console.log('Express server listening on port 1337');
//   });
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
app.post('/send_msg', (req, res) => {
    const client = new twilio(accountSid, authToken);

    return client.messages
        .create({
            body: 'Feedback form for unit 1:\n1. On a scale of 1 to 5 how clean was the unit?',
            from: process.env.fromNumber,//Number assigned from twilio can be used by NGO as their own number
            to: process.env.toNumber //who to send the sms to
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
exports.sendMessage;
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
