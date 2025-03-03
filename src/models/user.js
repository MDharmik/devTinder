const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
    },
    lastName: {
        type: String,
    },
    emailId: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid email address");
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error ("Enter strong password");
            }
        }
    },
    age: {
        type: Number,
        min: 18,
    },
    gender: {
        type: String,
        validate(value){
            if(!["male", "female", "other"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        }
    },
    photoUrl: {
        type: String,
        default: "https://www.pnrao.com/?attachment_id=8917",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error ("Invalid URL");
            }
        }
    },
    about: {
        type: String,
        default: "This is default about of the user"
    },
    skills: {
        type: [String]
    }
},
{
    timestamps: true,
}

);

module.exports = mongoose.model("User", userSchema);