//upload file 
const mkdirp = require('mkdirp');
const multer  = require('multer'); 

const uploadImage = (type) => {
    const made = mkdirp.sync(`./public/images/${type}`); 
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, `./public/images/${type}`); //set up chỗ cần lưu file
        },
      
        filename: function (req, file, cb) {
          cb(null, Date.now() + "-" + file.originalname) //đặt lại tên cho file
        }
      });
    const  upload = multer({ 
        storage: storage,
        fileFilter : function (req,file, cb) {
          const extensionImageList = [".png", ".jpg"]; 
          const extension = file.originalname.slice(-4); 
          const check = extensionImageList.includes(extension); 
          if(check) {
            cb(null, true)
          } else {
            cb(new Error("File extension is not accepted"))
          }
        }
       });
    return upload.single(type); 
}

module.exports = {
    uploadImage
}