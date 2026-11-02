const signupMiddleware = (req, res, next) => {
    const { name, email, password, confirmPassword, mobile, gender, addressLane1, building, pincode } = req.body;

    if (!name || !email || !password || !confirmPassword || !mobile || !gender || !addressLane1 || !building || !pincode) {
        return res.status(400).json({
            message: "Please fill all required fields"
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters"
        });
    }

    next();
};

module.exports = signupMiddleware;