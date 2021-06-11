const express = require("express");
const app = express();
const port= process.env.port||4500;
require('./src/db/connection')
const Ranking = require('./src/model/Ranking')
const router =require('./src/routs/router')

app.use(express.json());
app.use(router);




app.listen(port,()=>{
    console.log(`listen port on ${port}`);
})