import { Request, response } from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (request: Request, file, callBack) {
    
        let destinationFolder;
        destinationFolder = path.join(__dirname, "..", "..", "uploads", "photos");
        callBack(null, destinationFolder);
    },

    filename: function (request:Request, file, callBack) {
        const {announceId} = request.body;
        callBack(null,announceId+file.originalname);
    },
});

const photoUpload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50,
    files: 1,
  },

    fileFilter: function (request: Request, file, callBack) {
    const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

    if (!allowedFileTypes.includes(file.mimetype)) {
      const messsage = "Only Jpeg, PNG and JPG are supported";
      return callBack(new Error());
    }

    callBack(null, true);

  },
});


export { photoUpload };