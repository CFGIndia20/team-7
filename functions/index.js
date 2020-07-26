//import all needed dependencies
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
//end of dependencies
//defaults setting 
let qn=0;
let responseTo='responseTo'
let response ='';
ans='\n\nसेंटजुडे की सुविधाओं का उपयोग करने के लिए धन्यवाद!\nA) यूनिट 1 के लिए फीडबैक फॉर्म: 1 से 5 के पैमाने पर यूनिट कितनी साफ थी?\n\nC. 1 से 5 के पैमाने पर राशन की आपूर्ति कैसे होती थी?\n SMS C <your_RATING> SMS A <your_RATING>\n'
function getMsg(qn){ //what question to ask should move it to db later.
    switch(qn){ //change the questions later and give hindi
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
    
} // update qn_no and response collection in db
async function updateData(newval){
    await db.collection('users').doc("+919820054228").set(newval).then(()=>{
        console.log("Answering succesfully!");
    })

}
async function readFlag(req) //check what  next ques to show for the database
{
    await db.collection('users').doc("+919820054228").get().then(doc=>{ //get user doc by phone
        functions.logger.log("+919820054228"+" doc:  "+ doc.data());
        if(doc.exists){
            qn=doc.data.question_no;
            responseTo+=''+qn;
            response=req.body;
            ans=getMsg(qn);
            newval={ //set to next ques no
                'question_no':qn+1,
                 responseTo:response //record user response
                
            }
            updateData(newval); //update to new data
           
        }
        else{
            newval={
                'question_no':0 //if user doesnt exist default vals
                
            }
            updateData(newval);
            functions.logger.log("+919820054228"+"doesnt exist");
        }
    });
}
app.post('/sms', (req, res) => { //main api hit for replies
    const twiml = new MessagingResponse();
    readFlag(req); //whats the question number
    twiml.message(ans); //keep the text as sms body to send
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });
  
//   http.createServer(app).listen(1337, () => {
//     console.log('Express server listening on port 1337');
//   });
const accountSid = process.env.accountSid; //Tying to keep everything private 
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












