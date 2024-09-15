const Caravan = require('../model/caravan')

const AddData = (req, res) => {
    try {
        const {name, company, type, license, passanger, date, cost, location, rating} = req.body;
        const CaravanModel = new Caravan({name, company, type, license, passanger, date, cost, location, rating}); // connecting to model of motor in firt line
        CaravanModel.save();
        console.log(`info added: name: ${name}, company${company}, passanger:${passanger},  `);
        res.status(201).json({message: 'Data added Successfully', CaravanModel}) 
    } catch (error) {
        res.status(404).json({message:'Error in adding data', error})
    }
    
}

const GetData = async (req, res) => {
    try {
        const caravan = await Caravan.find();
        res.status(200).json(caravan)
    } catch (error) {
        console.error('error to get data from api', error)
    }
    
}

const EditData = async (req, res) => {
    try {
     const { id } = req.params;
    const { newName, newCompany, newLicense, newPassanger, newCost, newType, newDate, newRating, newLocation} = req.body;
    const caravanName = await Caravan.findById(id);
    if(caravanName){
        caravanName.name = newName || caravanName.name;
        caravanName.company = newCompany || caravanName.company;
        caravanName.license = newLicense || caravanName.license;
        caravanName.passanger = newPassanger || caravanName.passanger;
        caravanName.cost = newCost || caravanName.cost;
        caravanName.type = newType || caravanName.type;
        caravanName.date= newDate|| caravanName.date
        caravanName.rating= newRating|| caravanName.rating
        caravanName.location= newLocation|| caravanName.location
        await caravanName.save()
        console.log(`edited name is , changed name is ${caravanName.id}`);
        res.status(200).json({message:'Updated', caravanName})
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
    const caravan = await Caravan.findByIdAndDelete(id)
    if(caravan){
       console.log('data is deleted')
       res.status(200).json({message:`Deleted data is ${caravan}`});
    }else{
        res.status(404).json({message:'not found'})
    }   
    } catch (error) {
        res.status(404).json({message: 'error to delete data from api', error})
    } 
}

const AllDelete = async (req, res) => {
    try {
     await Caravan.deleteMany();
     console.log('all is deleted') 
     res.status(200).json({message:'all deleted'})
    } catch (error) {
        res.status(404).json({message: 'error to delete all data from api', error})
    }
}

module.exports = {AddData, GetData, EditData, DeleteData, AllDelete};