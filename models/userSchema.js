const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const userSchema = new Schema ({
    firstName:{
    type: String,
    required: [true, "first Name is required"],
    trim: true,
    maxLength: 50,
    minLength: 3,
    },
    userName : {
        type: String, 
        unique: true, 
        required: [true, "username is required"],
        trim: true, 
        maxlength: 12,
        lowercase: true,
        match: /^[a-zA-Z0-9_\-\.]+$/, // Allow alphanumeric characters, underscore, hyphen, and dot
        validate: {
          validator: function(v) {
            // Custom validation function to check for excluded characters
            return !/[@!#$%]/.test(v);
          },
          message: props => `${props.value} contains invalid characters (excluding @!#$%)`
        },
    },
        email: {
            type: String,
            unique: true,
            required: [true, "email is required"],
            trim: true,
            lowercase: true,
            maxLength: 30,

        },
        phoneNumber: {
            type: String, 
            unique: true,
            required: [true, "phone number is required"],
            trim: true,
            maxLength: 20, 
        },
        profilePicture : {
            type: String,
            default: "",
        },
        followings: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        followers: [
            {
            type: Schema.Types.ObjectId,
            ref: "User",
            },
        ],
        recommendations: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        countriesVisited: [
             {
                type: Schema.Types.ObjectId,
                ref: "User",
             },
        ],
        password: {
            type: String,
            required: true,
            trim: true,
            minLength: 8,
        },
        passowrdConfirmed:{
            type: String,
            trim: true,
            minLength: 8,
        },
        passwordChangedAt: Date,
  }, 
    { timestamps: true }
);
    userSchema.pre("save", async function(next){
        try{
           if(!this.isModified("password")) {
           return next();
        }
        this.password = await bcrypt.hash(this.password,12);
        this.passwordConfirmed = undefined;
        }catch(err){
            console.log(err);
        }
    });
      userSchema.methods.checkPassword = async function (candidatePassword, userPassword)
      {
        return await bcrypt.compare(candidatePassword, userPassword)
      }
      module.exports = mongoose.model("User", userSchema);