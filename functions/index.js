const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const app = express();
const engines=require("consolidate");
const firebaseApp=firebase.initializeApp(
    functions.config().firebase
);
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index')
})
app.get("/try",(req,res)=>{
    res.send("works")
})
app.get("/loggedIn",(req,res)=>{
    res.render("loggedin")
})
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
// app.listen(8000);