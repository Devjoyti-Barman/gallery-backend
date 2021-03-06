
import Gallery from '../../models/gallery.js';
import upload from '../../moddlewares/upload.js';
import fs from 'fs';

import path from 'path';
const __dirname = path.resolve();

const uploadImage=async (req,res)=>{
    
    try {
        
   
        await upload(req,res);
    
        const {ImgName,ImgDetails}=req.body;

        if( ImgName===undefined || ImgName===null || ImgName.length <4){

            fs.unlink( path.join(__dirname,'uploads',req.file.filename),function(err){
                 
                if(err){
                    throw new Error(err);
                }
            });
            
            return res.status(400).send({error:'ImgName must be greater then length 3'});
        }
        if(ImgDetails===undefined || ImgDetails===null || ImgDetails.length <4 ) {
            
            fs.unlink( path.join(__dirname,'uploads',req.file.filename),function(err){
                
                if( err){

                    throw new Error(err);
                }
            });
            
            return res.status(400).send({error:'ImgDetails must be greater then length 3'});
        }


        const newGallery= new Gallery({
            ImgName:req.body.ImgName,
            ImgURL:req.file.filename,
            ImgDetails:req.body.ImgDetails
        });

        await newGallery.save();

        res.send(newGallery);
  
    } catch (error) {

        res.status(400).send(error);
    }
      

        

 
}


export default uploadImage;