import mongoose from "mongoose";

const rectAngleSchema = new mongoose.Schema({
    fillColor: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    width: {
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

export const Rectangle = mongoose.model("Rectangle", rectAngleSchema)