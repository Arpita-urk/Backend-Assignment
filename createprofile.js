const User = require('../models/User');

const createProfile = async (req, res) => {
    try {
        const { qualification, skills } = req.body;

        const user = await User.findByIdAndUpdate(
            req.user.id,
            {
                qualification,
                skills
            },
            { new: true }
        ).select('-password');

        res.json({
            message: "Profile updated successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "Profile creation failed"
        });
    }
};

module.exports = createProfile;