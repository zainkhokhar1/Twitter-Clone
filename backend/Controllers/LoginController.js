
import User from "../Models/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
let SECRET = 'THISIS$3MYSECRET3'
export const LoginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        let userFinded = await User.findOne({ email });
        if (userFinded) {
            let confirmUser = await bcrypt.compare(password, userFinded.password);
            console.log(confirmUser);
            if (confirmUser) {
                let AuthToken = await jwt.sign({ _id: userFinded._id }, SECRET);
                res.status(200).json({ success: 'Welcome to TwitterClone', userFinded, AuthToken });
            }
            else {
                res.status(401).json({ error: 'Incorrect Password' });
            }
        }
        else {
            res.status(400).json({ error: 'No such user Exists' });
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(400).json({ error: 'Internal Server Error' });
    }
}