import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlenght: 60
    },
    desc: {
        type: String,
        required: true,
        maxlenght: 250
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: [Number],
        required: true
    },
    extraIngredient: {
        type: [
            {
                text: {type: String, required: true}, 
                price: {type: Number, required: true },
            },
        ],
    },
},
{ timestamp: true }
);


export default mongoose.models.Product || mongoose.model('Product', ProductSchema );