const mongoose = require('mongoose')

const campingSchema = new mongoose.Schema({
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
    type: String,
    // required:true
   },
   location:{
    type: String,
    // required: true
   },
   rating:{
    type: String,
    // required:true
   }
});

const Camping = mongoose.model("Camping", campingSchema)
module.exports = Camping; 