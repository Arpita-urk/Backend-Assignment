const user = require('../models/user');
const bycript = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
     try {
        const {
            name, email, gender, mobile,
            addressLane1, addressLane2,
            building, landmark, pincode,
            password, confirmPassword
        } = req.body;

         if (password !== confirmPassword) {
            return res.json({ message: "Passwords do not match" });
        }

    const user = await user.findOne({email});

    if(user){
        return res.json({message: 'User already exists'});

    }
    const hashedPassword = await bycript.hash(password, 10);

    const newUser = new user({
        name,
        email,
        mobile,
        password: hashedPassword,
        confirmPassword: hashedPassword,
        address: req.body.address,
        addressLane1: optional.body.addressLane1,
        addressLane2: optional.body.addressLane2,
        building: req.body.building,
        landmark: optional.body.landmark,
        pincode: req.body.pincode
    });
      await newUser.save();

        res.json({ message: "Signup successful" });

    } catch (error) {
        res.status(500).json({ message: "Signup failed" });
    }
};

module.exports = signup;
   