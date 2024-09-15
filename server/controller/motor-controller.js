const Motor = require('../model/motor')
const jwt = require('jsonwebtoken');


// no need to generate token

const AddData = (req, res) => {
    try {
        const {name, company, type, license, passanger, date, cost, location, rating} = req.body;
        const MotorModel = new Motor({name, company, type, license, passanger, date, cost, location, rating}); // connecting to model of motor in firt line
        MotorModel.save();
        console.log(`info added: name: ${name}, company${company}, passanger:${passanger},  `);
        res.status(201).json({message: 'Data added Successfully', MotorModel/* , token:generateToken(user._id) */}) 
    } catch (error) {
        res.status(404).json({message:'Error in adding data', error})
    }
    
}

const GetData = async (req, res) => {
    try {
        const motors = await Motor.find();
        res.status(200).json(motors)
    } catch (error) {
        console.error('error to get data from api', error)
    }
    
}

const EditData = async (req, res) => {
    try {
     const { id } = req.params;
    const { newName, newCompany, newLicense, newPassanger, newCost, newType, newDate, newRating, newLocation} = req.body;
    const motorName = await Motor.findById(id);
    if(motorName){
        motorName.name = newName || motorName.name;
        motorName.company = newCompany || motorName.company;
        motorName.license = newLicense || motorName.license;
        motorName.passanger = newPassanger || motorName.passanger;
        motorName.cost = newCost || motorName.cost;
        motorName.type = newType || motorName.type;
        motorName.date= newDate|| motorName.date
        motorName.rating= newRating|| motorName.rating
        motorName.location= newLocation|| motorName.location
        await motorName.save()
        console.log(`edited name is ${motorName.name}, changed name is ${motorName.id}`);
        res.status(200).json({message:'Updated', motorName})
    }else{
        res.status(404).json({message:'not found'})
    }   
    } catch (error) {
        console.error('error to edit data from api', error)
        res.status(500).json({ message: 'Internal server error' })
    }
    
}

const DeleteData = async (req, res) => {
    try {
     const { id } = req.params;
    const motor = await Motor.findByIdAndDelete(id);
    if(motor){
       console.log('data is deleted')
       res.status(200).json({message:`Deleted data is ${motor}`});
    }else{
        res.status(404).json({message:'not found'})
    }   
    } catch (error) {
        res.status(404).json({message: 'error to delete data from api', error})
    } 
}

const AllDelete = async (req, res) => {
    try {
     await Motor.deleteMany();
     console.log('all is deleted') 
     res.status(200).json({message:'all deleted'})
    } catch (error) {
        res.status(404).json({message: 'error to delete all data from api', error})
    }
}

module.exports = {AddData, GetData, EditData, DeleteData, AllDelete};