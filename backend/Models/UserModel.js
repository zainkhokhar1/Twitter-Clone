
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = Schema({
    name : {
        type : String,
        required : true,
        length : 3,
    },
    email : {
        type : String,
        required : true,
        length : 4,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        length : 5,
    },
    image : {
        type : String,
    }
});

const User = mongoose.model('User',userSchema);

export default User;