import jwt from 'jsonwebtoken';

const isAuth = async (req, res, next)=>{
    try {
        let {token} = req.cookies;
        if(!token){
            return res.status(401).json({
                message:"User does not have token"
            })
        }

        let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if(!verifyToken){
             return res.status(403).json({
                message:"User does not have a valid token"
            })
        }
        req.userId = verifyToken.userId;
        console.log("Decoded token payload:", verifyToken);
        next();

    } catch (error) {
        console.log("isAuth Error");
        return res.status(500).json({
            message:  `isAuth Error ${error}`
        })
    }
}

export default isAuth;