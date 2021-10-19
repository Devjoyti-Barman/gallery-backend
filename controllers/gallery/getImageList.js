import Gallery from "../../models/gallery.js"
import mongoose from 'mongoose';
import fs from 'fs';

import path from 'path';
const __dirname = path.resolve();


const getImageList=async (req,res)=>{
     
    try {
        
        if(isNaN(req.params.pageNo)){
            return res.status(400).send('No images exist');
        }
        let pageNo=Math.max(req.params.pageNo,1);
        let offSet=9;
        let Skip=(pageNo-1)*offSet;

        let data=await Gallery.find({}).skip(Skip).limit(offSet);
        
        if(data.length===0)return res.send(data);

        let Images=data.map((image)=>{
            
            const temp={};
            
            temp.ImgName=image.ImgName;
            temp.ImgDetails=image.ImgDetails;
            
            temp.img=fs.readFileSync(path.join(__dirname,'uploads',image.ImgURL) );

            return temp;
        })
        
        return res.send(Images);
    } catch (error) {
        res.status(400).send(error);
    }
}

export default getImageList;