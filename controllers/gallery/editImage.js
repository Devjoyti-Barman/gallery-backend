import Gallery from "../../models/gallery.js"
import mongoose from 'mongoose';
import fs from 'fs';

import path from 'path';
const __dirname = path.resolve();


const editImage=async (req,res)=>{
     
    try {
        
        if( mongoose.isValidObjectId(req.body.id) === false ){
            return res.status(400).send( {error:'The image does not exist'} );
            
        }

        const {ImgName,ImgDetails}=req.body;

        if( ImgName===undefined || ImgName===null || ImgName.length <4){
            return res.status(400).send({error:'ImgName must be greater then length 3'});
        }
        if(ImgDetails===undefined || ImgDetails===null || ImgDetails.length <4 ) {
            return res.status(400).send({error:'ImgDetails must be greater then length 3'});
        }

        const data=await Gallery.findById(req.body.id);

        if(data===null) return res.status(400).send('The image does not exist');
    
        await Gallery.updateOne({_id:req.body.id},{ImgName,ImgDetails});

        res.send('The image updated successfully');
    } catch (error) {
        res.status(400).send(error);
    }
}

export default editImage;