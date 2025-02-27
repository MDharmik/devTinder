const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  // creating instance of user model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// GET user by emailId
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try{
    const user = await User.findById(req.body._id);
    // const user = await User.findById({ _id: req.body._id });
    if (!user) {
          res.status(404).send("User not found");
        } else {
          res.send(user);
        }
  }

  // try {
  //   const user = await User.findOne({ emailId: userEmail });
  //   if (!user) {
  //     res.status(404).send("User not found");
  //   } else {
  //     res.send(user);
  //   }
  // } 
    // try {
    //   const users = await User.find({ emailId: userEmail });
    //   if (users.length === 0) {
    //     res.status(404).send("User not found");
    //   } else {
    //     res.send(users);
    //   }
    // }
    catch (err) {
      res.status(400).send("Something went wrong");
  }
});

// Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send("something went wrong");
  }
});

// Delete the user
app.delete('/user', async (req, res)=> {
  const userId = req.body.userId;
  try{
    // const user = await User.findOneAndDelete({_id: userId});
    const user = await User.findOneAndDelete( userId );
    res.send("user deleted successfully");
  }
  catch(err) {
    res.status(500).send("Something went wrong");
  }

});

// Update data of the user
app.patch("/user", async (req, res)=> {
  const userId = req.body.userId;
  const userEmail = req.body.emailId;
  const data = req.body;

  // try{
  //   const user = await User.findByIdAndUpdate(userId, data);
  //   res.send("User updated successfully");
  // }
  try{
    const user = await User.findOneAndUpdate({emailId: userEmail}, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User updated successfully");
  }
  catch(err) {
    res.status(500).send("Something went wrong "+ err.message);
  }

})


connectDB()
  .then(() => {
    console.log("Database connection established..");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((error) => {
    console.log("Database cannot be connected!!");
  });
