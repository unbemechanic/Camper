const mongoose = require('mongoose')

const motorSchema = new mongoose.Schema({
   name:{
       type: String,
    //    required: true,
    //    unique: true,
   },
   company:{
       type: String,
    //    required: true
   },
   type:{
    type: String,
    // required:true
   },
   license:{
    type: String,
    // required: true
   },
   passanger:{
    type: String,
    // required:true
   },
   date:{
    type: String,
    // required: true
   },
   cost:{
    type: Number,
    // required:true
   },
   location:{
    type: String,
    // required: true
   },
   rating:{
    type: Number,
    // required:true
   }
});

const Motor = mongoose.model("Motor", motorSchema)
module.exports = Motor; 