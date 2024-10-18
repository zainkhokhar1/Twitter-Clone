import { ReturnDocument } from 'mongodb';
import User from '../Models/UserModel.js'

export const userInfo = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await User.findById({ _id: id });
        if (user) {
            return res.status(200).json({ success: 'Successfully Retrived Data from the User', user });
        }
    }
    catch (e) {
        res.status(401).json({ error: 'Failed to get the User Details' });
        console.log(e.message);
    }
}

export const updateUser = async (req, res) => {
    try {
        let { name, image, coverImage } = req.body;
        let { id } = req.params;
        let user = await User.findById({ _id: id });
        if (user) {
            let updatedUser = await User.findByIdAndUpdate({ _id: id }, {
                name,
                image,
                coverImage,
            });
            if (updatedUser) {
                return res.status(200).json({ success: 'Updated successfully', updateUser });
            }
        }
        return res.status(401).json({ error: 'No such user Founded' });
    }
    catch (e) {
        console.log(e.message);
        res.status(401).json({ error: 'No such user Founded' });
    }
};

export const addFollower = async (req, res) => {
    let { Id } = req.params;
    try {
        let { id } = req.body;
        console.log(Id);
        console.log(id);
        let updateFollowers = await User.findOne({ _id: Id });
        if (updateFollowers) {
            let checkingFollowing = updateFollowers.followers.includes(id);
            if (checkingFollowing) {
                let followers = updateFollowers.followers.filter((singleFollower) => {
                    return singleFollower.toString() !== id
                });
                updateFollowers.followers = followers;
                await updateFollowers.save();
                return res.status(200).json({ success: 'Unfollow done Succesfully', updateFollowers, isFollowing: false });
            }
            else {
                updateFollowers.followers.push(id);
                await updateFollowers.save();
                return res.status(200).json({ success: 'Following Now', updateFollowers, isFollowing: true });
            }
        }
    }
    catch (e) {
        res.status(400).json({ error: 'Error from the backend' });
        console.log(e.message);
    }
}

export const fiveUsers = async(req,res)=>{
    try{
        let allUsers= await User.find({}).limit(5);
        if(allUsers){
            return res.status(200).json({success :"Got the Data Successfully",allUsers});
        }
    }
    catch(e){
        console.log(e.message);
        return res.status(400).json({error :"Error in the backend"});
    }
}