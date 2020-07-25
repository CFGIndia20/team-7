
const express= require("express");
const router = express.Router();
//const request= require("request");


//route 1 //html ejs
router.get('/', (req,res)=>{
	res.render("homepage");
});


//error route always at the enddddd
router.get('*', (req,res)=>{
	res.send("error page does not exist");
});


module.exports= router;