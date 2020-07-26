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



router.get("/signup",function(req,res){
	res.render("signup");
});

router.post("/signup",function(req,res){

	var newUser = new User({username:req.body.username});
	User.register(newUser,req.body.password,function(err,user){
		if(err){
    	console.log(err);
    	//return res.render("register", {error: err.message});
}
		else{
			passport.authenticate("local")(req,res,function(){

				res.redirect("/");
			});
		}
	});	


})


router.get("/donor",(req,res)=>{
	res.render("donor");

});



router.get("/login",(req,res)=>{
	res.render("login");
});


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


router.get("/admin",(req,res)=>{
	res.render("admin");

});


router.get("/donor",function(req,res){
	res.render("donor");
})


router.get("/rating",(req,res)=>{
	res.render("rating");

});

router.get("/rating/:id",function(req,res){
	var unitId=req.params.id;
	res.render("showUnit",{id:unitId});
	
})

router.get("/rating/:id/unit/:uId",(req,res)=>{
	var uId=req.params.uId;
	res.render("report",{uId:uId});
});

router.get("/feedback",(req,res)=>{
	res.render("feedback");

});

router.post("/feedback",(req,res)=>{
	res.redirect("/");

});

router.get("/feedbackstat",(req,res)=>{
	res.render("feedbackstat");

});

router.post("/feedbackstat",(req,res)=>{
	res.redirect("/");

});



//error route always at the enddddd
router.get('*', (req,res)=>{
	res.send("error page does not exist");
});


module.exports = router;