import mongoose from 'mongoose';


const GallerySchema=new mongoose.Schema({

    ImgName:{
        type:String,
        required:true,
    },
    ImgURL:{
        type:String,
        unique:true,
        required:true
    },
    ImgDetails:{
        type:String,
        required:true
    },

},{timestamps:true})

const Gallery=mongoose.model("Gallery",GallerySchema);

export default Gallery;