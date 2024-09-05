const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

authSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


authSchema.methods.matchPassword = async function(enteredPassword){
    return bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", authSchema);
module.exports = User