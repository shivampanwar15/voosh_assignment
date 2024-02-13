import express from 'express'
import Order from "../models/order.js"
import authentication from '../middlewares/authentication.js'

const router  = express.Router();



router.post("/add-order", authentication, async (req, res) => {
    try {
        const { user_id, sub_total, phoneNumber } = req.body;

        console.log("Request Body:", req.body);

        const newOrder = {
            user_id,
            sub_total,
            phoneNumber
        };

        const createdOrder = await Order.create(newOrder);

        console.log("Created Order:", createdOrder);

        res.status(201).json({ success: true });
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ success: false, error: error.message });
    }
});
export default router;