import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema({

    user_id :  {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    sub_total :  {
        type: String,
        required : true,
    },

    phoneNumber :  {
        type: String,
        required : true
    },

},
{
    timestamps : true
}
)
const Order  = mongoose.model('Order' , orderSchema);
export default Order;