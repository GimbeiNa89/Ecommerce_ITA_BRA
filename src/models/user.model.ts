import { Mongoose } from "mongoose";
import mongoose from "mongoose";
import { IUser } from "../interface/user.interface";

const userSchema = new mongoose.Schema<IUser>(
    {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true
    }
}, 
    {timestamps: true}
);
export const userModel = mongoose.model("userModel", userSchema);

