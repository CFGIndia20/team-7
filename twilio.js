//HIDING AUTH TOKENS IN ENVIRONMENT VAR FILE FOR GIT
require('dotenv').config();
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;

// const sendMessage = function (msgBody) {
    const client = require('twilio')(accountSid, authToken);

    return client.messages
        .create({
            body: 'Test message from twilio',
            from: '+19193360752',//Number assigned from twilio can be used by NGO as their own number
            to: '+919820054228' //who to send the sms to
        }).then(msg=>console.log(msg.sid));
// };
// module.exports = sendMessage;