const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    usernames:String, 
    phone:Number,  
    email:String,
    password:String,
    // age:Number,
});
const UserModel = mongoose.model('User',userSchema);
module.exports = UserModel;