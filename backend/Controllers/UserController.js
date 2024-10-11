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