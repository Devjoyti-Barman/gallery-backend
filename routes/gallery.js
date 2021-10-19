import express from "express";

import uploadImage from "../controllers/gallery/gallery.js";
import getImage from "../controllers/gallery/getImage.js";


const router=express.Router();


router.route('/upload-image').post(uploadImage);
router.route('/get-image').get(getImage);




export default router;