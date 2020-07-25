//const functions = require('firebase-functions');
//const firebase = require('firebase-admin');
const express = require('express');
const app = express();
const fs=require("fs");
const bodyParser =	require("body-parser");
const indexRoute = require("./routes/index");
mongoose     =			require('mongoose'),
  passport     =   		require("passport"),
 LocalStrategy=         require("passport-local"),
  methodOverride=        require("method-override")	,
  User 		  =	        require("./models/user");
//const engines=require("consolidate");
/*const firebaseApp=firebase.initializeApp(
    functions.config().firebase
);
*/

//Requiring Routes
app.use('/', indexRoute);


var url="mongodb://localhost:27017/cfgteam-7";
mongoose.connect(url,{useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended:true}));


//no need to use ejs extension
app.set("view engine", "ejs");

app.use(express.static("../public"));



//Passport Configuration
app.use(require("express-session")({
	secret: "$Team7$",
	resave:false,
	saveUninitialized:false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());








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