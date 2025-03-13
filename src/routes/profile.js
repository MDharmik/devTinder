const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middleware/auth");
const { validateEditProfileData } = require("../utils/validation");
const bcrypt = require("bcrypt");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
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

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  validateEditProfileData(req);
  try {
    // Data sanitization
    validateEditProfileData(req);

    const loggedInUser = req.user; //coming from userAuth

    // replace loggedIn user details with the user coming from req
    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();

    // res.send(`${loggedInUser.firstName}, your profile updated successfully.`);
    res.json({
      message: `${loggedInUser.firstName}, your profile updated successfully.`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

profileRouter.patch("/profile/edit/password", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const { oldPassword, newPassword } = req.body;
    const isPasswordValid = await loggedInUser.validatePassword(oldPassword);

    if (isPasswordValid) {
      const newHashedPassword = await bcrypt.hash(newPassword, 10);
      loggedInUser.password = newHashedPassword;
      await loggedInUser.save();

      res.json({
        message: "Password updated successfully",
        data: loggedInUser,
      });
    } else {
      throw new Error("Invalid old password");
    }
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

module.exports = profileRouter;
