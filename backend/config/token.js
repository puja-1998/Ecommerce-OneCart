import jwt from 'jsonwebtoken';

// received userId from authController  //token for user
export const generateToken = async (userId) =>{
    try {
        let token = await jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"7d"});
        return token;
        
    } catch (error) {
        console.log("Token Error"); 
    }
}


// received email from authController  //Token for admin login
export const genToken = async (email) =>{
    try {
        let token = await jwt.sign({email}, process.env.JWT_SECRET, {expiresIn:"7d"});
        return token;
        
    } catch (error) {
        console.log("Token Error"); 
    }
}