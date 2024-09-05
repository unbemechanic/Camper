const jwt = require("jsonwebtoken");
const User = require("../model/auth");

const protect = async (req, res, next) => {
    let token;
    console.log(req.headers)

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            console.log(token, 'this is token from headers')
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'shhhh');
            console.log(decoded, 'this is decoded token');
            req.user = await User.findById(decoded.id);
            return next();
        } catch (error) {
            console.log(process.env.JWT_SECRET, 'console env')

            return res.status(401).json({ message: "No token, or token fail backend" });
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'No Auth, no Token' });
    }
};

module.exports = { protect };
