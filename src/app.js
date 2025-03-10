const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middleware/auth");

app.use(express.json());
app.use(cookieParser());

//  create new user
app.post("/signup", async (req, res) => {
  try {
    //  validation of data
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    //  Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);

    //  Creating a new instance of user model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
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

    const ispasswordValid = await bcrypt.compare(password, user.password);

    if (ispasswordValid) {
      // Create a JWT token
      const token = await jwt.sign({ _id: user._id }, "DEV@Tinder$2025", { expiresIn: '7d' });

      // add the token to cookie and send response back to the user
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
      });

      res.send("login successful!!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

app.get("/profile", userAuth, async (req, res) => {
  try {
    const {user} = req;

    if (!user) {
      throw new Error("User does not exist. Please login again");
    }

    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

app.post("/sendConnectionRequest", userAuth, async(req, res)=> {
try{
  const {user} = req;
  res.send(user.firstName + " sent connection request!!")

}catch (err) {
    res.status(400).send("ERROR:" + err.message);
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
