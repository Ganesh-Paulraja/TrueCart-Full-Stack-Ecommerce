import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"],
        trim: true,
    },
    currency: {
        type: String,
        default: "INR"
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        max: [9999999, "Price can't exceed 7 digits"]
    },
    image: [
        {
            public_id: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,
                required: true,
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please Enter Product Category"]
    },
    stock: {
        type: Number,
        required: [true, "Please Enter Product Stocks"],
        max: [99999, "Stock can't exceed 5 digits"]
    },
    ratings: {
        type: Number,
        default: 0,
    },
    numberOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Product", productSchema);