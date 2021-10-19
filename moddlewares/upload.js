import multer from 'multer';
import util from 'util';

const fileFilter=(req,file,cb)=>{

    // accept a file
    if( file.mimetype==='image/jpeg' || file.mimetype==='image/png') {
      cb(null,true);
    }else{
      cb(null,false);
    }
}

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads/')
    },
    filename: function (req, file, callback) {
        
        let FileName=new Date().toISOString()  + "."+file.originalname;

        FileName=FileName.replaceAll(":","-");

        callback(null,FileName );
    }
});

const uploadFile = multer({ 
    storage: storage ,    
    limits:{
    fileSize:1024*1024*5
    },
    fileFilter:fileFilter
}).single('productImage');

const upload =util.promisify(uploadFile)

export default upload;