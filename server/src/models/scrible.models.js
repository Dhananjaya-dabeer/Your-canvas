import mongoose from "mongoose";

const scribbleSchema = new mongoose.Schema({
    fillColor: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },

    points: {
        type: [{type: Number}],
        required: true
    }
})

export const Scribble = mongoose.model("Scribble", scribbleSchema)