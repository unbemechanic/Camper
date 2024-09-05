const UsedCar = require('../model/used-car')

const AddData = (req, res) => {
    try {
        const {name, company, type, license, passanger, date, cost, location, rating} = req.body;
        const UsedCarModel = new UsedCar({name, company, type, license, passanger, date, cost, location, rating}); // connecting to model of motor in firt line
        UsedCarModel.save();
        console.log(`info added: name: ${name}, company${company}, passanger:${passanger},  `);
        res.status(201).json({message: 'Data added Successfully', UsedCarModel}) 
    } catch (error) {
        res.status(404).json({message:'Error in adding data', error})
    }
    
}

const GetData = async (req, res) => {
    try {
        const usedCar = await UsedCar.find();
        res.status(200).json(usedCar)
    } catch (error) {
        console.error('error to get data from api', error)
    }
    
}

const EditData = async (req, res) => {
    try {
     const { name } = req.params;
    const { newName, newCompany, newLicense, newPassanger, newCost, newType, newDate, newRating, newLocation} = req.body;
    const usedCarName = await UsedCar.findOne({name});
    if(usedCarName){
        usedCarName.name = newName || usedCarName.name;
        usedCarName.company = newCompany || usedCarName.company;
        usedCarName.license = newLicense || usedCarName.license;
        usedCarName.passanger = newPassanger || usedCarName.passanger;
        usedCarName.cost = newCost || usedCarName.cost;
        usedCarName.type = newType || usedCarName.type;
        usedCarName.date= newDate|| usedCarName.date
        usedCarName.rating= newRating|| usedCarName.rating
        usedCarName.location= newLocation|| usedCarName.location
        usedCarName.save()
        console.log(`edited name is , changed name is ${usedCarName.name}`);
        res.status(200).json({message:'Updated', usedCarName})
    }else{
        res.status(404).json({message:'not found'})
    }   
    } catch (error) {
        console.error('error to edit data from api', error)
        
    }
    
}

const DeleteData = async (req, res) => {
    try {
     const { name } = req.params;
    const usedCar = await UsedCar.findOneAndDelete({name})
    if(usedCar){
       console.log('data is deleted')
       res.status(200).json({message:`Deleted data is ${usedCar}`});
    }else{
        res.status(404).json({message:'not found'})
    }   
    } catch (error) {
        res.status(404).json({message: 'error to delete data from api', error})
    } 
}

const AllDelete = async (req, res) => {
    try {
     await UsedCar.deleteMany();
     console.log('all is deleted') 
     res.status(200).json({message:'all deleted'})
    } catch (error) {
        res.status(404).json({message: 'error to delete all data from api', error})
    }
}

module.exports = {AddData, GetData, EditData, DeleteData, AllDelete};