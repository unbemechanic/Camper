const Tuning = require('../model/tuning')

const AddData = async (req, res) => {
    try {
        const {name, company, type, license, passanger, date, cost, location, rating} = req.body;
        const TuningModel = new Tuning({name, company, type, license, passanger, date, cost, location, rating}); // connecting to model of motor in firt line
        await TuningModel.save();
        console.log(`info added: name: ${name}, company${company}, passanger:${passanger},  `);
        res.status(201).json({message: 'Data added Successfully', TuningModel}) 
    } catch (error) {
        res.status(404).json({message:'Error in adding data', error})
    }
    
}

const GetData = async (req, res) => {
    try {
        const tuning = await Tuning.find();
        res.status(200).json(tuning)
    } catch (error) {
        console.error('error to get data from api', error)
    }
    
}

const EditData = async (req, res) => {
    try {
     const { id } = req.params;
    const { newName, newCompany, newLicense, newPassanger, newCost, newType, newDate, newRating, newLocation} = req.body;
    const tuningName = await Tuning.findById(id);
    if(tuningName){
        tuningName.name = newName || tuningName.name;
        tuningName.company = newCompany || tuningName.company;
        tuningName.license = newLicense || tuningName.license;
        tuningName.passanger = newPassanger || tuningName.passanger;
        tuningName.cost = newCost || tuningName.cost;
        tuningName.type = newType || tuningName.type;
        tuningName.date= newDate|| tuningName.date
        tuningName.rating= newRating|| tuningName.rating
        tuningName.location= newLocation|| tuningName.location
        await tuningName.save()
        console.log(`edited name is , changed name is ${tuningName.name}`);
        res.status(200).json({message:'Updated', tuningName})
    }else{
        res.status(404).json({message:'not found'})
    }   
    } catch (error) {
        console.error('error to edit data from api', error)
        
    }
    
}

const DeleteData = async (req, res) => {
    try {
     const { id } = req.params;
    const tuning = await Tuning.findByIdAndDelete(id)
    if(tuning){
       console.log('data is deleted')
       res.status(200).json({message:`Deleted data is ${tuning}`});
    }else{
        res.status(404).json({message:'not found'})
    }   
    } catch (error) {
        res.status(404).json({message: 'error to delete data from api', error})
    } 
}

const AllDelete = async (req, res) => {
    try {
     await Tuning.deleteMany();
     console.log('all is deleted') 
     res.status(200).json({message:'all deleted'})
    } catch (error) {
        res.status(404).json({message: 'error to delete all data from api', error})
    }
}

module.exports = {AddData, GetData, EditData, DeleteData, AllDelete};