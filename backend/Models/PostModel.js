
import mongoose from "mongoose";

let Schema = mongoose.Schema;

const PostSchema = Schema({
    owner: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    text: {
        type: String,
        required: true,
        length: 2,
    },
    image: {
        type: String,
        required: true,
    },
    likes: [
        {
            type: Schema.Types.ObjectId, ref: 'User',
            default: [],
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId, ref: 'User',
            default: [],
        },
    ],
    shares: [
        {
            type: Schema.Types.ObjectId, ref: 'User',
            default: [],
        }
    ]
});

const Post = mongoose.model('Post', PostSchema);

export default Post;