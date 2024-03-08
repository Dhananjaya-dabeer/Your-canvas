import mongoose from "mongoose"

const arrowSchema = new mongoose.Schema({
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

export const Arrow = mongoose.model("Arrow", arrowSchema)