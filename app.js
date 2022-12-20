let ArrIp = ["::1","::2","::3","::4"];
const express = require ('express');
const app=express();
const auth = require('./api/v1/midllewares/auth');
const moragan = require('morgan');
const Productrouter = require("./api/v1/routes/product");
//הוספת שכבת ביניים של מורגן שמתעדת כל פנייה לשרת בקונסול
app.use(moragan('dev'));
app.use(function(req,res,next){
    console.log("My Midlleware"+req.url)
    next();
})
app.use("/product", Productrouter);



module.exports=app;

