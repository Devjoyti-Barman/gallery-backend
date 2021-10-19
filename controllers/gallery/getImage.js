import Gallery from "../../models/gallery.js"
import mongoose from 'mongoose';
import fs from 'fs';

import path from 'path';
const __dirname = path.resolve();


const getImage=async (req,res)=>{
     
    try {
        
        if( mongoose.isValidObjectId(req.params.id) === false ){
            return res.status(400).send( {error:'The image does not exist'} );
            
        }

        let Image=await Gallery.findById(req.params.id);
        
        const data='data:image/jpeg;base64,'+fs.readFileSync(path.join(__dirname,'uploads',Image.ImgURL),{encoding: 'base64'});
        
        return res.send({Image,data});   

    } catch (error) {
        res.status(400).send(error);
    }
}

export default getImage;