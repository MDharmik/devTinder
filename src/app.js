const express = require('express');

const app = express();

// app.use("/hello/2", (req, res)=> {
//     res.send("Hello again");
// });

// app.use("/hello", (req, res)=> {
//     res.send("Hello! Hello! Hello!");
// });

// app.use("/test", (req, res)=> {
//     res.send("Hello from the Test Server!");
// });

// app.use("/", (req, res)=> {
//     res.send("Hello from the dashboard!");
// });

// ==========================================================================================

// This will only handle GET call to /user 
app.get("/user", (req, res) => {
    res.send({firstName:'Madhura', lastName:'Dharmik'});
});

app.post("/user", (req, res) => {
    // saving data to DB
    res.send("Data successfully saved to the DB");
});

app.delete("/user", (req, res) => {
    res.send("Data deleted successfully");
});


// This will match all the HTTP method API calls to /test
app.use("/test", (req, res)=> {
    res.send("Hello from the Test Server!");
});


app.listen(7777, ()=> {
    console.log("Server is successfully listening on port 7777...");
});