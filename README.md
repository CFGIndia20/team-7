# Team-7: 404: Solution Found!

A wholesome solution for the NPO St.Jude to make their processing and daily functioning easier .

## About

There are 2 functional branches of this project:
1. Master
2. cloudFunctions.


## 1.Master

The Master contains the various routes which handle the various data creation and manipulation requests.
We have used MongoDB and passport.js for user authentication. We have added a isAdmin attribute for all users which can be changed from the backend to give Admin access to a particular user.
A feature of generating reports for a particular unit in a Centre has been encorporated with the help of chart.js which helps in generating visually attractive reports.
To ease the process of collecting feedback from a population with a weak literacy background, we have developed a form with easy to understand images and emojis as ratings to the several parameters. Also a hindi translation of this parameters will help them to understand the question in an efficient manner.
For a better communication channel with the donors we have developed a Chatbot using Google Dialogflow which can provide the user with relevant information as per the requirements but due to time constraints we couldn't implement the feature to dynamically fetch data from the database.



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

##### The code ("Code") in this repository was created solely by the student teams during a coding competition hosted by JPMorgan Chase Bank, N.A. ("JPMC").						JPMC did not create or contribute to the development of the Code.  This Code is provided AS IS and JPMC makes no warranty of any kind, express or implied, as to the Code,						including but not limited to, merchantability, satisfactory quality, non-infringement, title or fitness for a particular purpose or use.