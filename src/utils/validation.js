const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Name is not valid");
  }

  // It's available in user model. no need to write here..
  // else if(firstName.length < 4 || firstName.length > 50){
  //     throw new Error("First name should be 4 to 50 characters");
  // }
  else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong Password");
  }
};

const validateEditProfileData = (req) => {
  const { skills } = req.body;
  // Define an array of allowed fields for update.
  // Make sure to exclude 'email' or any other fields you don't want to allow.
  const allowedEditFields = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "photoUrl",
    "about",
    "skills",
  ];

  // Extract the keys from the update object.
  const updateKeys = Object.keys(req.body);

  // Check if every key in the update is in the allowedEditFields list.
  const isEditAllowed = updateKeys.every((key) => allowedEditFields.includes(key));

  if (!isEditAllowed) {
    throw new Error(
      "Invalid updates! Only allowed fields can be updated and email cannot be updated."
    );
  }

  // If skills is provided, check its length.
  if (skills && skills.length > 5) {
    throw new Error("You can only add up to 5 skills");
  }
};

module.exports = {
  validateSignUpData,
  validateEditProfileData
};
