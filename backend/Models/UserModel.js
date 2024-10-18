
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        length: 3,
    },
    email: {
        type: String,
        required: true,
        length: 4,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        length: 5,
    },
    image: {
        type: String,
    },
    coverImage: {
        type: String,
        default: 'https://img.freepik.com/premium-photo/minimal-geometric-background-copy-space_1179130-412585.jpg?w=740'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: [],
    }]
});

const User = mongoose.model('User', userSchema);

export default User;