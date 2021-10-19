import Gallery from "../../models/gallery.js"
import mongoose from 'mongoose';
import fs from 'fs';

import path from 'path';
const __dirname = path.resolve();


const getImage=async (req,res)=>{
     
    try {
        
        if( mongoose.isValidObjectId(req.body.id) === false ){
            return res.status(400).send( {error:'The image does not exist'} );
            
        }

        let Image=await Gallery.findById(req.body.id);
        

        fs.readFile(path.join(__dirname,'uploads',Image.ImgURL) , (err, data) => {
            if (err) {
              return res.status(400).send('The file does not exist');
              
            }
                
            return res.send({Image,data});
            
        })

        //let image=fs.readFileSync( path.join(__dirname,'uploads',data.ImgURL) );
        

    

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export default getImage;