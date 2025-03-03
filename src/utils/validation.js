const validator =  require("validator");

const validateSignUpData = (req) => {
    const { firstName, lastName, emailId, password } = req.body;
    if(!firstName || !lastName){
        throw new Error("Name is not valid")
    }

    // It's available in user model. no need to write here..
    // else if(firstName.length < 4 || firstName.length > 50){
    //     throw new Error("First name should be 4 to 50 characters");
    // }

    else if(!validator.isEmail(emailId)){
        throw new Error("Email is not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter a strong Password");
    }
}

module.exports = {
    validateSignUpData,
}