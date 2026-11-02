const User = require('../models/User');

const deleteProfile = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.user.id);
        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json({
            message: "Profile deleted ",
        });
    } catch(error){
        res.status(500).json({
            message: "Fail to delete profile"      
        
        })
    }
}