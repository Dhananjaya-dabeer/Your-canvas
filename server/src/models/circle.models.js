import mongoose from "mongoose";

const circleSchema = new mongoose.Schema({
    fillColor: {
        type: String,
        required: true
    },

    id: {
        type: String,
        required: true
    },
    radius: {
        type: Number,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    }
})

export const Circle = mongoose.model("Circle", circleSchema)