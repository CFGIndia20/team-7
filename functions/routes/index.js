const fs=require('fs');
const express= require("express");
const router = express.Router({mergeParams:true});
//const request= require("request");
var passport = require("passport");
var User = require("../models/user");



//route 1 //html ejs
router.get('/', (req,res)=>{
	res.render("homepage");
});


<<<<<<< HEAD


router.get("/register",function(req,res){
	res.render("register");
});

router.post("/register",function(req,res){

	var newUser = new User({username:req.body.username});
	User.register(newUser,req.body.password,function(err,user){
		if(err){
    	console.log(err);
    	//return res.render("register", {error: err.message});
}
		else{
			passport.authenticate("local")(req,res,function(){

				res.redirect("/success");
			});
		}
	});	


})


=======
router.get("/donor",(req,res)=>{
	res.render("donor");

});

>>>>>>> 41ea9d635174629d8b3329e793e90a7df2fd78d9

router.get("/login",(req,res)=>{
	res.render("login");
});

<<<<<<< HEAD
//Handling Login logic
//app.post("/login",middleware,callback)
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login'
  }), (req, res) => {
    if (req.user.isAdmin === true) {
      res.redirect('/admin');
    }
    if (req.user.isAdmin === false) {
      res.redirect('/donor');
    }
  });
=======
>>>>>>> 41ea9d635174629d8b3329e793e90a7df2fd78d9


router.get("/admin",(req,res)=>{
	res.render("admin");

});


router.get("/donor",function(req,res){
	res.render("donor");
})


router.get("/rating",(req,res)=>{
	res.render("rating");

});

router.get("/feedback",(req,res)=>{
	res.render("feedback");

});

router.get("/feedbackstat",(req,res)=>{
	res.render("feedbackstat");

});


//error route always at the enddddd
router.get('*', (req,res)=>{
	res.send("error page does not exist");
});


module.exports = router;