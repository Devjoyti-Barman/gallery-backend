import Gallery from "../../models/gallery.js"
import mongoose from 'mongoose';
import fs from 'fs';

import path from 'path';
const __dirname = path.resolve();


const deleteImage=async (req,res)=>{
     
    try {
        
        if( mongoose.isValidObjectId(req.body.id) === false ){
            return res.status(400).send( {error:'The image does not exist'} );
            
        }

        let Image=await Gallery.findById(req.body.id);
        
        fs.unlink( path.join(__dirname,'uploads',Image.ImgURL),function(err){
                
            if( err){
                throw new Error(err);
            }

        });
        
        await Image.remove();
        res.send('The image deleted successfully');
    } catch (error) {
        res.status(400).send(error);
    }
}

export default deleteImage;