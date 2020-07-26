require("dotenv").config()
//const functions = require('firebase-functions');
//const firebase = require('firebase-admin');
const express = require('express');
const app = express();
const fs=require("fs");
const bodyParser =	require("body-parser");
const mongoose     =			require('mongoose');
const   passport     =   		require("passport");
const  LocalStrategy=         require("passport-local");
const   methodOverride=        require("method-override")	;
const   User 		  =	        require("./models/user");
app.use(bodyParser.urlencoded({extended:true}));
const indexRoute = require("./routes/index");
//const http = require('http');
//const jsreport = require('jsreport');
const path = require ('path');




//const engines=require("consolidate");
/*const firebaseApp=firebase.initializeApp(
    functions.config().firebase
);
*/





var url="mongodb://localhost:27017/coodforgood";
mongoose.connect(url,{useNewUrlParser:true});


app.use(express.static(path.join(__dirname,"public")));



//no need to use ejs extension
app.set("view engine", "ejs");

app.use(express.static("../public"));



//Passport Configuration
app.use(require("express-session")({
	secret: process.env.SECRET,
	resave:false,
	saveUninitialized:false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//Requiring Routes
app.use('/', indexRoute);



/*
app.get("/pdf", (req,res)=>{
	res.sendFile("index.html");
})
/*
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