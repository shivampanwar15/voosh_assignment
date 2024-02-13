import express from 'express'
import User from "../models/user.js"
import Order from "../models/order.js"
import authentication from '../middlewares/authentication.js'

const router  = express.Router();



router.get("/get-order", authentication , async (req, res) =>{
    try {
            const userId = req.user.userId;
            console.log(userId);
            const orders = await Order.find({ user_id : userId});
            res.json(orders);
           
        }
    
    catch (error) {
        res.status(400).json({ success: false });
    }

} )
export default router;