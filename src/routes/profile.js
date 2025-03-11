const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middleware/auth");

profileRouter.get("/profile", userAuth, async (req, res) => {
    try {
      const { user } = req;
  
      if (!user) {
        throw new Error("User does not exist. Please login again");
      }
  
      res.send(user);
    } catch (err) {
      res.status(400).send("ERROR:" + err.message);
    }
  });

  module.exports = profileRouter;