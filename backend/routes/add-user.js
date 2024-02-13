import express from 'express'
import User from "../models/user.js"
import bcrypt from "bcrypt";


const router  = express.Router();



router.post("/add-user", async (req, res) => {
  
   
    try {
      const { name, phoneNumber, password } = req.body; 
      console.log(name);
      if (phoneNumber.length < 10 || password.length < 8) {
        console.log("Please provide a valid Phone Number and Password");
        return res.status(400).json({ error: 'Invalid password or Phone Number.' });
      }
  
      const user = await User.findOne({ phoneNumber });
      if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        await User.create({
          name: name,
          phoneNumber: phoneNumber,
          password: hashedPassword
        });
  
        res.status(201).json({ success: true });
      }
    } catch (error) {
      console.error("Error during user creation:", error);
      res.status(400).json({ success: false });
    }
  });
  
export default router;