const User = require ("../models/userSchema");
const validator = require ("validator");

exports.signup = async(req, res) => {
    try{
       if (validator.isEmail(req.body["email"])){
        return res.status(400).json({message: "invalid email address"});
       }
       function validatePhoneNumber() {
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const pattern = /^\+961 \d{8}$/;
        const isValid = pattern.test(phoneNumber);
        document.getElementById('phoneValidationMsg').textContent = isValid ? '' : 'Please enter a valid 8-digit phone number.';
        return isValid;
    }
       const checkUserExistence = await User.findOne({
        $or: [{email : req.body["email"]},{username: req.body["username"]}]
    });
     if(CheckUserExistence){
        return res.status(409).json({message:"User already exists"});
     }
     if(req.body["password"] !== req.body("passwordConfirmed")){
     return res.status(400).json({message: " Please enter matching Password and password confirm"})};
    const newUser = await User.create({
        firstName: req.body["firstName"],
        LastName: req.body["LastName"],
        username: req.body["username"],
        email: req.body["email"],
        phoneNumber: req.body["PhoneNumber"],
        password: req.body["password"],
        passwordConfirmed: req.body["passwordConfirmed"],
        passwordChangedAt: Date.now(),
    });

    return res.status(201).json({message: "Signed up successfully!"});

    }catch(err){
        cosnole.log(err);
        res.status(500).json({message: err.message}) ;
       }
};

exports.login = async(req, res) => {
    try{
      const {email, password} = req.body;
      const User = await User.findOne({email});

      if(!user || !await (await user.checkPassword(password, user.password))) {
      return res.status(401).json({message: "invalid credentials!"});
      }
      return res.status(200).json({message: "logged im successfully!"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
}