const express = require('express');

const app = express();

// GET /users => it checks all the app.xxx('matching route') function
// GET /users => middleware chain => request handler

app.use('/', (req, res, next) => {
    // res.send('handling / route');
    next();
});

app.get(
    '/users', 
    (req, res, next)=> {                                //middleware
        console.log("Handling the route user");
        next();
    },

    (req, res, next)=> {            //middleware
        next();
    },

    (req, res)=> {
        res.send("2nd route handler");              // request handler
    }
);


app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...");
});