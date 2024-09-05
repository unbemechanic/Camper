const mongoose = require('mongoose')

const tuningSchema = new mongoose.Schema({
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
    type: Number,
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

const Tuning = mongoose.model("Tuning", tuningSchema)
module.exports = Tuning; 