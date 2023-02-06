import mongoose from "mongoose";


const OrdersSchema = new mongoose.Schema({
   
    customer: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 60
    },
    address: {
        type: String,
        required: true,
        minlenght: 250,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0,
    },
    method: {
        type: Number,
        required: true,
    },
},
{ timestamps: true }
);

export default mongoose.models.Orders || mongoose.model("Order", OrdersSchema );