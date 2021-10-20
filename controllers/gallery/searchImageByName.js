import Gallery from "../../models/gallery.js"
import mongoose from 'mongoose';
import fs from 'fs';

import path from 'path';
const __dirname = path.resolve();


const searchImgByName=async (req,res)=>{
     
    try {
       
        const data=await Gallery.find({$regex:{$search:req.params.imgName}}).limit(5);
        

        let Images=data.map((image)=>{
            
            const temp={};
            
            temp.ImgName=image.ImgName;
            temp.ImgDetails=image.ImgDetails;
            temp.id=image._id;
            temp.img='data:image/jpeg;base64,'+fs.readFileSync(path.join(__dirname,'uploads',image.ImgURL),{encoding: 'base64'});

            return temp;
        })
        
        return res.send(Images);
    
    } catch (error) {
        res.status(400).send(error);
    }
}

export default searchImgByName;