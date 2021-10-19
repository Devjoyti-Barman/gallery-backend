import express from "express";

import uploadImage from "../controllers/gallery/gallery.js";
import getImage from "../controllers/gallery/getImage.js";
import deleteImage from '../controllers/gallery/deleteImage.js';
import editImage from "../controllers/gallery/editImage.js";
import getImageList from "../controllers/gallery/getImageList.js";

const router=express.Router();


router.route('/upload-image').post(uploadImage);
router.route('/image/page/:pageNo').get(getImageList);
router.route('/get-image').get(getImage);
router.route('/detele-image').delete(deleteImage);
router.route('/edit-image').put(editImage);



export default router;