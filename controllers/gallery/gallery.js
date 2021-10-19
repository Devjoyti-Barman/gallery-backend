
import Gallery from '../../models/gallery.js';
import upload from '../../moddlewares/upload.js';


const uploadImage=async (req,res)=>{
    
    try {
        
        const {ImgName,ImgDetail}=req.body;
        
        // console.log(ImgName);
        // console.log(ImgDetail);

        // if( ImgName===undefined || ImgName===null || ImgName.length <4){
        //     return res.status(400).send({error:'ImgName must be greater then length 3'});
        // }
        // if(ImgDetail===undefined || ImgDetail===null || ImgDetail.length <4 ) {
        //     return res.status(400).send({error:'ImgDetail must be greater then length 3'});
        // }

        await upload(req,res);

        const newGallery= new Gallery({
            ImgName:req.body.ImgName,
            ImagURL:req.file.path,
            ImgDetail:req.body.ImgDetail
        });

        await newGallery.save();

        res.send(newGallery);
  
    } catch (error) {
        res.status(400).send(error);
    }
      

        

 
}


export default uploadImage;