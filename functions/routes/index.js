
const express= require("express");
const router = express.Router();
//const request= require("request");


//route 1 //html ejs
router.get('/', (req,res)=>{
	res.render("homepage");
});


router.get("/donor",(req,res)=>{
	res.render("donor");

});


router.get("/login",(req,res)=>{
	res.render("login");
});



router.get("/admin",(req,res)=>{
	res.render("admin");

});

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