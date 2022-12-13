const express = require ('express');
const app=express();
const Productrouter = require("./api/v1/routes/product");

app.use("/product", Productrouter);

//

module.exports=app;
