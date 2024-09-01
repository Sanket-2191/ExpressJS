// make necessary imports here
import { Schema } from "mongoose"

// write your code here
export const reviewSchema = new Schema({
    text: { type: String, required: true },

    rating: { type: Number, required: true, min: 1, max: 5 },

    target: { type: String, enum: ["Author", "Book"], required: true },

    targetId: { type: Schema.Types.ObjectId, refPath: "target", required: true }
});
