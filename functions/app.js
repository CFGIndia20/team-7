//const functions = require('firebase-functions');
//const firebase = require('firebase-admin');
const express = require('express');
const app = express();
//const engines=require("consolidate");
/*const firebaseApp=firebase.initializeApp(
    functions.config().firebase
);
*/

app.use(express.static("../public"));

//no need to use ejs extension
app.set("view engine", "ejs");

//calls routrer -index.js
app.use('/', router);


/*app.get('/',(req,res)=>{
    res.render('index')
})
app.get("/try",(req,res)=>{
    res.send("works")
})
app.get("/loggedIn",(req,res)=>{
    res.render("loggedin")
})
*/
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const PORT = process.env.PORT||5000;
app.listen(PORT, ()=> console.log(`Server running..on ${PORT}`));