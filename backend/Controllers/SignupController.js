import User from "../Models/UserModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
let SECRET = 'THISIS$3MYSECRET3'
export const SignupUser = async (req, res) => {
    try {
        let { name, email, password, image } = req.body;
        let userChecking = await User.findOne({ email });
        if (userChecking) {
            return res.status(401).json({ error: 'User Already Exists' })
        }
        else {
            let Salt = await bcrypt.genSalt(10);
            let smartPassword = await bcrypt.hash(password, Salt);
            let newUser = await User.create({
                name,
                email,
                password: smartPassword,
                image,
            });
            await newUser.save();
            if (newUser) {
                let AuthToken = await jwt.sign({ _id: newUser._id }, SECRET);
                return res.status(200).json({ success: 'Successfully Created new User', AuthToken, newUser });
            }
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(400).json({ error: "Failed to Create new User" });
    }
}