//const functions = require('firebase-functions');
//const firebase = require('firebase-admin');
const express = require('express');
const app = express();
//const http = require('http');
//const jsreport = require('jsreport');
const path = require ('path');

const router = require("./routes/index");
//const engines=require("consolidate");
/*const firebaseApp=firebase.initializeApp(
    functions.config().firebase
);
*/


app.use(express.static(path.join(__dirname,"public")));


//no need to use ejs extension
app.set("view engine", "ejs");

//calls routrer -index.js
app.use('/', router);

app.get("/pdf", (req,res)=>{
	res.sendFile("index.html");
})

/*
http.createServer((req,res)=>
{
	jsreport.render({
		template: {
			content: '<h1> Hello worrld </h1>',
			engine:"ejs",
			recipe: 'chrome-pdf',
		}
	}).then((out)=>{
		out.stream.pipe(res);
	}).catch((e)=>{
		res.end(e.message);

	});
});*/


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