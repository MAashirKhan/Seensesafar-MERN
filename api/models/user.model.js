import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required : true,
    },
    userEmailAddress: {
        type: String,
        required: true,
    },
    
})