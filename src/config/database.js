const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://MDharmik:imUg5AJsq6L2aqZb@namastenode.hag4v.mongodb.net/devTinder');
};

module.exports = connectDB;
