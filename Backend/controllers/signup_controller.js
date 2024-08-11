const User = require("../models/user.model");
const bcrypt = require('bcrypt');


exports.signup = async (req, res) => {

    console.log(req.body)
    try {

        let user = await User.findOne({ email: req.body.email, phone: req.body.phone });
        if (user != null) {
            return res.status(400).json({ "message": "This email or phone number is already linked with an account." });
        }
        let ca_id =
            "24KTJ" +
            Math.floor(Math.random() * 899999 + 100000).toString(10) + "CA";
        let user_check = await User.findOne({ ca_id: `${ca_id}` });
        while (user_check != null) {
            let ca_id = 
                "24KTJ" +
                Math.floor(Math.random() * 899999 + 100000).toString(10) + "CA";
            user_check = await User.findOne({ ca_id: `${ca_id}` });
        }
        const { first_name, last_name, email, password, gender, phone, college, city, state } = req?.body;

        const newUser = new User({ first_name, last_name, email, gender: gender?.toUpperCase(), phone, college, city, state, ca_id });


        const saltRounds = 10;

        bcrypt
            .hash(req.body.password, saltRounds)
            .then((hash) => {
                newUser.password = hash;

                newUser
                    .save()
                    .then(() => {
                        return res.status(200).json({
                            message: "User registered successfully",
                        });
                    })
                    .catch((err) => { return res.status(400).json("Error2: " + err) });
            })
            .catch((err) => res.status(400).json("Error3: " + err));
    } catch (err) {
        return res.status(400).json("Error4: " + err);
    }
};
