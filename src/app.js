const express = require("express");

const app = express();

// this won't run bcoz error is not defined here
app.use('/', (err, req, res, next)=> {
    if(err){
        res.status(500).send('Something went wrong1');
    }
});

app.get("/user/getUserData", (re, res) => {
    // try{
        throw new Error ("random error")
        res.send("user data sent");
    // }
    // catch{
    //     res.status(500).send('Something went wronggggggggggg')
    // }
   
});

// if no try catch block then this will run 

app.use('/', (err, req, res, next)=> {
    if(err){
        res.status(500).send('Something went wrong2');
    }
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
