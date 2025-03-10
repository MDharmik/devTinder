const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypy = require("bcrypt");

app.use(express.json());

//  create new user
app.post("/signup", async (req, res) => {
  try {
    //  validation of data
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    //  Encrypt the password
    const passwordHash = await bcrypy.hash(password, 10);
    console.log(passwordHash);

    //  Creating a new instance of user model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash, // it will show error if line 15 not defined
    });
    await user.save();
    res.send("User added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// User login
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const ispasswordValid = await bcrypy.compare(password, user.password);
    if (ispasswordValid) {
      res.send("login successful!!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// GET user by emailId
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.findById(req.body._id);
    // const user = await User.findById({ _id: req.body._id });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
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
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    // const user = await User.findOneAndDelete({_id: userId});
    const user = await User.findOneAndDelete(userId);
    res.send("user deleted successfully");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

// Update data of the user
app.patch("/user/:userId", async (req, res) => {
  // const userId = req.body.userId;
  const userId = req.params?.userId;
  const data = req.body;

  const ALLOWED_UPDATES = [
    "userId",
    "photoUrl",
    "about",
    "gender",
    "age",
    "skills",
  ];

  try {
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }
    if (data.skills?.length > 10) {
      throw new Error("Skills should not be more than 10");
    }
    // const user = await User.findOneAndUpdate({emailId: req.body.emailId}, data);
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User updated successfully");
  } catch (err) {
    res.status(500).send("Something went wrong " + err.message);
  }
});

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
