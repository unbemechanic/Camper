const User = require("../model/auth")
const jwt = require('jsonwebtoken');

const generateToken = (id)=> {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn:"30d",
        
    })
}

const Register = async (req, res) =>{
    const {name, email, password} = req.body;
    try {
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message: 'User exists'})
        }
        const user = await User.create({
            name,
            email,
            password,
        })
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            token: generateToken(user._id)
        })
    } catch (error) {
        
    }
}
const GetSignUpData = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
       res.status(404).json({message:'Get Sign Up data failure', error}) 
    }
}

const LogIn = async(req, res) => {
    
    try {
        const {email, password} = req.body;
        const emailExist = await User.findOne({email});
        if(emailExist && (await emailExist.matchPassword(password))){
            res.status(201).json({
                _id: emailExist._id,
                name: emailExist.name,
                email: emailExist.email,
                token: generateToken(emailExist._id)
            })
        }else{
            res.status(400).json({message:'Log in error'})
        }
    } catch (error) {
        res.status(404).json({message:'login error'})
    }
}

module.exports = {Register, LogIn, GetSignUpData }