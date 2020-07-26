# Team-7: 404: Solution Found!

A wholesome solution for the NPO St.Jude to make their processing and daily functioning easier .

## About

There are 2 functional branches of this project:
1. Master
2. cloudFunctions.


## 1.Master

put more descriptions here

## 2.CloudFunctions:
Cloud Functions (on Branch CloudFunctions):
The cloud functions code has been written on the branch cloudFunctions and is seperate from the web code.
The cloud functions have been deployed to servers provided by Google firebase.
They have been written in node.js and express has been used for providing end points in the form of REST API's 
The cloud functions have been used to provide offline feedback submission facility for feature phone users.
It uses the services of Twilio to accomplish the same.
The users are sent feedback questions in their local language (here considered Hindi) and in batches depending on their importance/priority. 
We keep track of which questions have been already answered by user on the database (FireStore provided by firebase) and dont ask them again.
Their responses are recorded and are planned to be used for generating statistics for KPI indicators and performance evaluators.
The messages are sent in localised language( considering Hindi) for easier understanding.
On sending a message to a service number provided by Twilio the twilio server will hit the endpoint of the API hosted on firebase servers and send a normal sms to the user after checking what last question user has answered and show the next question
On recieving a message from the user the response will be recorded and stored on the database with the sender id, number and all related details.

## License
[MIT](https://choosealicense.com/licenses/mit/)
