const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
    try {
      // Read the token
      const { token } = req.cookies;
  
      if (!token) {
        throw new Error("Token is not valid");
      }
  
      // Verify the token
      const decodedObj = await jwt.verify(token, "DEV@Tinder$2025");
      const { _id } = decodedObj;
  
      // Find the user
      const user = await User.findById(_id);
      if (!user) {
        throw new Error("User not found");
      }
  
      req.user = user;
      next();
    } catch(err) {
      res.status(400).send("ERROR: " + err.message);
    }
  };

module.exports = {
    userAuth
}