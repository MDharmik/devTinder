const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middleware/auth");

app.use("/admin", adminAuth); // middleware created
// app.use("/user", userAuth);      // single route so can write like below..

app.get("/user", userAuth, (re, res) => {
  res.send("user data sent");
});

app.post('/user/login', (req, res)=> {
    res.send("User logged in successfully. No need for userAuth..")
})

app.get("/admin/getAllData", (req, res) => {
  res.send("all data sent");
});

app.get("/admin/deleteUser", (re, res) => {
  res.send("User deleted");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
