import { asyncHandler } from "../utils/asyncHandler.js";

import { Arrow } from "../models/arrow.models.js"
import { Circle } from "../models/circle.models.js"
import { Rectangle } from "../models/rectangle.models.js"
import { Scribble } from "../models/scrible.models.js"

export const health = asyncHandler(async (req, res) => {

    res.json({
        message: "server is up and running",

    })

})

export const canvasPostData = asyncHandler(async (req, res) => {
    const { arrows, rectangles, circles, scribbles } = req.body;
        await Arrow.deleteMany({})
        await Rectangle.deleteMany({})
        await Circle.deleteMany({})
        await Scribble.deleteMany({})
    const arrowData = arrows.length > 0 && await Arrow.create(arrows)
    const rectAngleData = rectangles.length > 0 && await Rectangle.create(rectangles)
    const circleData = circles.length > 0 && await Circle.create(circles)
    const scribbleData = scribbles.length > 0 && await Scribble.create(scribbles)

    return res.json({
        status: "Success"
    })
})

export const canvasGetData = asyncHandler(async (req, res) => {
    const arrowData = await Arrow.find()
    const rectAngleData = await Rectangle.find()
    const circleData = await Circle.find()
    const scribbleData = await Scribble.find()
    // const result = [arrowData.length && {...arrowData}, rectAngleData.length && {...rectAngleData}, circleData.length && {...circleData}, scribbleData.length && {...scribbleData}]
    return res.json({
        status: "Success",
        data: {
            arrows: arrowData,
            rectangle: rectAngleData,
            circle: circleData,
            scribble: scribbleData
        }
    })
})