const Camping = require('../model/camping')

const AddData = (req, res) => {
    try {
        const {name, company, type, license, passanger, date, cost, location, rating} = req.body;
        const CampingModel = new Camping({name, company, type, license, passanger, date, cost, location, rating}); // connecting to model of motor in firt line
        CampingModel.save();
        console.log(`info added: name: ${name}, company${company}, passanger:${passanger},  `);
        res.status(201).json({message: 'Data added Successfully', CampingModel}) 
    } catch (error) {
        res.status(404).json({message:'Error in adding data', error})
    }
    
}

const GetData = async (req, res) => {
    try {
        const camping = await Camping.find();
        res.status(200).json(camping)
    } catch (error) {
        console.error('error to get data from api', error)
    }
    
}

const EditData = async (req, res) => {
    try {
     const { name } = req.params;
    const { newName, newCompany, newLicense, newPassanger, newCost, newType, newDate, newRating, newLocation} = req.body;
    const campingName = await Camping.findOne({name});
    if(campingName){
        campingName.name = newName || campingName.name;
        campingName.company = newCompany || campingName.company;
        campingName.license = newLicense || campingName.license;
        campingName.passanger = newPassanger || campingName.passanger;
        campingName.cost = newCost || campingName.cost;
        campingName.type = newType || campingName.type;
        campingName.date= newDate|| campingName.date
        campingName.rating= newRating|| campingName.rating
        campingName.location= newLocation|| campingName.location
        campingName.save()
        console.log(`edited name is , changed name is ${campingName.name}`);
        res.status(200).json({message:'Updated', campingName})
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
    const camping = await Camping.findOneAndDelete({name})
    if(camping){
       console.log('data is deleted')
       res.status(200).json({message:`Deleted data is ${camping}`});
    }else{
        res.status(404).json({message:'not found'})
    }   
    } catch (error) {
        res.status(404).json({message: 'error to delete data from api', error})
    } 
}

const AllDelete = async (req, res) => {
    try {
     await Camping.deleteMany();
     console.log('all is deleted') 
     res.status(200).json({message:'all deleted'})
    } catch (error) {
        res.status(404).json({message: 'error to delete all data from api', error})
    }
}

module.exports = {AddData, GetData, EditData, DeleteData, AllDelete};