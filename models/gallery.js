import mongoose from 'mongoose';


const GallerySchema=new mongoose.Schema({

    ImgName:{
        type:String,
        required:true,
    },
    ImagURL:{
        type:String,
        unique:true,
        required:true
    },
    ImgDetail:{
        type:String,
        required:true
    },

},{timestamps:true})

const Gallery=mongoose.model("Gallery",GallerySchema);

export default Gallery;