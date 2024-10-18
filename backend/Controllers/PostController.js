
import Post from "../Models/PostModel.js";

export const CreatePost = async (req, res) => {
    try {
        let { text, owner, image, date } = req.body;
        console.log(image, text, owner)
        let CreatedPost = await Post.create({
            text,
            owner,
            image,
            createdAt: date,
        });
        CreatedPost.save();
        if (CreatedPost) {
            res.status(200).json({ success: 'Created Post Successfully', CreatePost });
        }
        else {
            res.status(401).json({ error: 'Failed to Create Post' });
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(400).json({ error: 'Failed to Created Post' });
    }
}

export const allPosts = async (req, res) => {
    try {
        let allPosts = await Post.find({}).populate('owner');
        if (allPosts) {
            res.status(200).json({ success: "Successfully got all the posts", allPosts });
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(401).json({ error: "Failed to get Fetch posts" });
    }
};

export const deletePost = async (req, res) => {
    try {
        let { id } = req.params;
        let { userId } = req.body;
        console.log(userId);
        let post = await Post.find({ _id: id }).populate('owner');
        console.log(post[0].owner)
        if (post) {
            if (post[0].owner._id.toString() === userId) {
                let deletionPost = await Post.findByIdAndDelete(id);
                if (deletionPost) {
                    return res.status(200).json({ success: 'Post Deleted Successfully' });
                }
            }
            else {
                console.log('error running')
                return res.status(401).json({ error: "Not Authorized User" });
            }
        }
    }
    catch (e) {
        console.log(e.message);
        return res.status(401).json({ error: "Failed to Delete Post" });
    }
}

export const likesUpdate = async (req, res) => {
    try {
        let { userId } = req.body;
        let { id } = req.params;
        let post = await Post.findOne({ _id: id });
        if (!post) {
            return res.status(401).json({ error: 'No post founded' });
        }
        let AlreadyLiked = post.likes.includes(userId);
        if (AlreadyLiked) {
            post.likes = post.likes.filter((like) => {
                return like.toString() !== userId
            });
            await post.save();
            return res.status(200).json({ success: 'false' });
        }
        else {
            post.likes.push(userId);
            await post.save();
            return res.status(200).json({ success: true, post });
        }
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updatePost = async (req, res) => {
    try {
        let { id } = req.params;
        console.log(id);
        if (req.body.image) {
            let { text, userId, image, updatedAt } = req.body;
            let post = await Post.find({ _id: id }).populate('owner');
            if (post) {
                console.log(post[0].owner._id)
                console.log(userId)
                if (post[0].owner._id.toString() === userId) {
                    let updationPost = await Post.findByIdAndUpdate(id, { text, image, createdAt: updatedAt });
                    if (updationPost) {
                        return res.status(200).json({ success: 'Post Updated Successfully' });
                    }
                }
                else {
                    console.log('error running')
                    return res.status(401).json({ error: "Not Authorized User" });
                }
            }
        }
        else {
            let { text, userId, updatedAt } = req.body;
            let post = await Post.find({ _id: id }).populate('owner');
            if (post) {
                console.log(post[0].owner._id)
                console.log(userId)
                if (post[0].owner._id.toString() === userId) {
                    let updationPost = await Post.findByIdAndUpdate(id, { text, createdAt: updatedAt });
                    if (updationPost) {
                        return res.status(200).json({ success: 'Post Updated Successfully' });
                    }
                }
                else {
                    console.log('error running')
                    return res.status(401).json({ error: "Not Authorized User" });
                }
            }
        }

    }
    catch (e) {
        console.log(e.message);
        return res.status(401).json({ error: "Not Authorized User" });
    }
}

export const UserPosts = async (req, res) => {
    try {
        let { id } = req.params;
        let allPosts = await Post.find({ owner: id }).populate('owner');
        if (allPosts) {
            return res.status(200).json({ success: 'Successfully Got all Posts', allPosts });
        }
    }
    catch (e) {
        res.status(401).json({ error: 'Failed to get the Data(Backend)' });
        console.log(e.message);
    }
}

export const showComments = async (req, res) => {
    try {
        let { id } = req.params;
        let post = await Post.findById({ _id: id }).populate({
            path: 'comments.owner',
            model: 'User'
        });
        if (post) {
            console.log(post);
            let comments = post.comments;
            return res.status(200).json({ success: 'These are posts comments', comments });
        }
        else {
            return res.status(401).json({ error: "No such post founded" });
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(400).json({ error: 'Error in the backend' });
    }
}

export const createComment = async (req, res) => {
    try {
        let { id } = req.params;
        let { userId, text, createdAt } = req.body;
        let post = await Post.findById({ _id: id });
        if (post) {
            await post.comments.push({
                owner: userId,
                text,
                createdAt,
            });
            await post.save();
            return res.status(200).json({ success: "Comment Added successfully", post });
        }
        else {
            return res.status(401).json({ error: 'No Post Founded' });
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({ error: 'No Post Founded in Backend' });
    }
}

export const followingPosts = async (req, res) => {
    try {
        let { followers } = req.body;
        let allPosts = await Post.find({
            owner: { $in: followers }
        }).populate('owner');
        if (allPosts) {
            res.status(200).json({ success: "Got posts successfully", allPosts });
        }
    }
    catch (e) {
        res.status(400).json({ error: 'Failed to get data from the backend' });
        console.log(e.message);
    }
}