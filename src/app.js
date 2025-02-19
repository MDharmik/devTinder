const express = require('express');

const app = express();

// app.use('/user', 
//     (req, res, next)=> {
//     //route handler
//     console.log("Handling the route user");
//     res.send("response");
//     next();
// },
// (req, res)=> {
//     console.log("Handling the route user2");
//     res.send("response 2");
// });

// ========================================

app.use('/user', 
    [(req, res, next)=> {
    console.log("Handling the route user");
    next();
    // res.send("response");
},
(req, res)=> {
    console.log("Handling the route user2");
    res.send("response 2");
}]
);

app.listen(7777, ()=> {
    console.log("Server is successfully listening on port 7777...");
});