import express from 'express'
import User from '../models/user.js'
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post("/login-user", async (req, res) => {
    try {
        const {phoneNumber, password} = req.body;

        if (phoneNumber.length < 10) {
            console.log("Please provide a valid Phone Number ");
            return res.status(400).json({ error: 'Invalid Phone Number.' });
        }

        const user = await User.findOne({ phoneNumber });
        if (!user) {
            return res.send({ success: false, message: "User does not exist!" })
        }
        const comparePassword = await bcrypt.compare(password, user.password);
        if (comparePassword) {
            const userId = user._id;
            const accessToken = jwt.sign(
                {
                    userId: userId,
                    name: user.name
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
                }
            )
            const options = {
                httpOnly: true,
                secure : true,
                sameSite: 'none',
            }
            
            res.status(200).cookie("accessToken", accessToken, options).json({success : true, currentUser : user.name , user_id :  userId});
        }
        else{
            res.status(401).json({success : false,  message: 'Invalid credentials' });

        }

    }

    catch (error) {
        res.status(500).json({ error: error.message });
  }
    }

)

export default router;