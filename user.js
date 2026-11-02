const { address } = require('framer-motion/client');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    addressLane1: {
        type: String,
        required: true
    },
    addressLane2: {
        type: String
    },
    building: {
        type: String,
        required: true
    },
    landmark: {
        type: String
    },
    pincode: {
        type: String,
        required: true
    },
    
});
const User = mongoose.model('User', userSchema);
module.exports = User;
