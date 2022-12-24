let ArrIp = ["::1","::2","::3","::4"];
const express = require ('express');
const app=express();
const auth = require('./api/v1/midllewares/auth');
const moragan = require('morgan');
const Productrouter = require("./api/v1/routes/product");
//הוספת שכבת ביניים של מורגן שמתעדת כל פנייה לשרת בקונסול
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'Shawn',
    password : 'bufu4ever!',
    database : 'ecommdb'
});
connection.connect(function(err){
    if(err)
        console.log(err.message);
    else
        console.log('connected to DataBase');    
});
global.MySqlDb = connection;

app.use(moragan('dev'));
//app.use(auth);

app.use("/product", Productrouter);
module.exports=app;

