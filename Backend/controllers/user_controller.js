const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.login_check = async (req, res) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        // console.log(token, "fgrtfygh");
        let decoded = "";
        try {
            decoded = await jwt.verify(token, process.env.JWT_KEYS);
        } catch (err) {
            return res.status(403).json({
                message: "login failed at jwt at login_check",
            });
        }
        if (decoded) {
            // console.log(decoded);
            const user = await User.findOne({ ca_id: decoded.ca_id });
            return res.status(200).json({
                message: "login check successful",
                user: user,
            });
        } else {
            return res.status(403).json({
                message: "login check failed",
            });
        }
    } catch (error) {
        return res.status(412).json({
            message: "some error occured " + error,
        });
    }

}
exports.profileedit = async (req, res) => {
    try {
        const { phone, college, city, state } = req?.body;

        let user = await User.findOne({ ca_id: req.user.ca_id });
        if (phone) {
            if (phone != null)
                user.phone = phone;
            if (college)
                user.college = college;
            if (city)
                user.city = city;
            if (state)
                user.state = state;
            await user.save();
            return res.status(200).json({
                message: "profile updated",
                user: user,
            });
        }
        else {
            return res.status(404).json({
                message: "user not found",
            });
        }


    }
    catch (err) {
        return res.status(500).json({ message: "some error occured" });
    }


}
