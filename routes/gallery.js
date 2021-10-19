import express from "express";

import uploadImage from "../controllers/gallery/gallery.js";

const router=express.Router();


router.route('/upload-image').post(uploadImage);

export default router;