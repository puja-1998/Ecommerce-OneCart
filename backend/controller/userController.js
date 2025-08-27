import User from "../model/userModel.js";




export const getCurrentUser = async (req, res)=>{
    try {
        let user = await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(404).json({message:"User is not found"})
        }
        return res.status(200).json({
            user,
            message:"User is found"
        })
    } catch (error) {
       console.log("getCurrentUser Error");
        return res.status(500).json({
            message:  `getCurrentUser Error ${error}`
        })
    }
}


export const getAdmin = async (req, res) => {
    try {
        let adminEmail = req.adminEmail;
        if(!adminEmail){
            return res.status(404).json({message:"Admin is not found"})
        }
        return res.status(201).json({
            email:adminEmail,
            role:"admin"
        })
    } catch (error) {
        console.log("getAdmin Error");
        return res.status(500).json({
            message:  `getAdmin Error ${error}`
        })
    }
}