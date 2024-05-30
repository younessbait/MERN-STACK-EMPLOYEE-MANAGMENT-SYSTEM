const Admin = require("../models/account");
const bcrypt = require('bcryptjs');
const jwtUtils = require('../utils/jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let admin = await Admin.findOne({ email: email });

        if (!admin) {
            const admins = await Admin.find({});
            if (admins.length === 0) {
                const hashedPassword = await bcrypt.hash(password, 10);
                admin = new Admin({
                    email: email,
                    password: hashedPassword,
                });
                await admin.save();
                const token = jwtUtils.sign({ sub: admin._id });
                return res.status(200).json({
                    message: "Admin created and logged in",
                    data: {
                        email: admin.email,
                        accessToken: token,
                    },
                });
            } else {
                return res.status(404).json({ message: "Admin not found." });
            }
        } else {
            const isMatch = await bcrypt.compare(password, admin.password);
            if (isMatch) {
                const token = jwtUtils.sign({ sub: admin._id });
                return res.status(200).json({
                    message: "Login successful",
                    data: {
                        email: admin.email,
                        accessToken: token,
                    },
                });
            } else {
                return res.status(401).json({ message: "Password incorrect" });
            }
        }
    } catch (error) {
        console.error("Error in login:", error);
        return res.status(500).json({ message: "Failed to process the request.", error });
    }
};
