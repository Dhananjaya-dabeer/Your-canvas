
import { Router } from "express";
import {health, canvasPostData, canvasGetData} from "../controllers/controllers.js";


const router = Router()

router.route("/health").get(health)
router.route("/canvasdata").get(canvasGetData)
router.route("/canvasdata").post(canvasPostData)



export default router