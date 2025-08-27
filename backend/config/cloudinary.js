import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

const uploadOnCloudinary = async (filepath) => {
    
    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

    try {
        if(!filepath){
        return null;
        }

        // Upload an image
        const uploadResult = await cloudinary.uploader.upload(filepath)
        fs.unlinkSync(filepath);
        return uploadResult.secure_url;
    } catch (error) {
         fs.unlinkSync(filepath);
         console.log(error)
    }
    
}

export default uploadOnCloudinary