import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataControl, DataList, DeleteButtonDiv, EditButtonDiv, FileInput, ScrollSec, Table, TableRow, UpdateButton, UpdateInputs } from '../style';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import  { CaravanAddModal, TuningAddModal } from '../modal';
import UpdateIcon from '@mui/icons-material/Update';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';



const TuningData = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [license, setLicense] = useState();
  const [passanger, setPassanger] = useState();
  const [cost, setcost] = useState();
  const [type, setType] = useState();
  const [date, setDate] = useState();
  const [rating, setRating] = useState();
  const [location, setLocation] = useState();
  const [newName, setNewName] = useState();
  const [newCompany, setNewCompany] = useState();
  const [newLicense, setNewLicense] = useState();
  const [newPassanger, setNewPassanger] = useState();
  const [newCost, setNewcost] = useState();
  const [newType, setNewType] = useState();
  const [newDate, setNewDate] = useState();
  const [newRating, setNewRating] = useState();
  const [newLocation, setNewLocation] = useState();
  const [update, setUpdate] = useState(Array(data.length).fill(false) )



  useEffect(()=>{
    fetchData();
    })

const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:5500/tuning");
        setData(response.data)
    } catch (error) {
        console.log('failed to fetch data', error)
    }
}

const handleSubmit = async (event)=>{
    event.preventDefault();
    if(name !== ''){
      try {
        const response = await axios.post("http://localhost:5500/tuning", {
            name, company, cost, rating, passanger, type, date, location, license 
        });
        console.log(response.data)
        fetchData();
        setName('')
        setCompany('')
        setcost('')
        setLocation('')
        setPassanger('')
        setType('')
        setDate('')
        setLicense('')
        setRating('')
    } catch (error) {
        console.error('failure', error)
    }  
    } 
}

const handleChange = (setter) =>(e)=>{
    setter(e.target.value)
}
const handleEdit = async (oldname) => {
    try {
        const response = await axios.put(`http://localhost:5500/tuning/${oldname}`, { newName, newCompany, newLicense, newPassanger, newCost, newType, newDate, newRating, newLocation});
        setNewName("");
        fetchData();
    } catch (error) {
       console.error('error editing' ) 
    }
}

const handleDelete = async (name) => {
    try {
        const response = await axios.delete(`http://localhost:5500/tuning/${name}`)
    } catch (error) {
        console.error(error)
    }
}
const handleClick = (index) =>{
  const newEditMode = [...update];
  newEditMode[index] = !newEditMode[index]
  setUpdate(newEditMode)
}

  return (
    <div>
            <DataList className='tablet'>
                <DataControl>
                    <b>Car list</b>
                    <div  style={{display:'flex', alignItems:'center', gap:'5px', cursor:'pointer'}}><SortOutlinedIcon/> Filter</div>
                    
                    <TuningAddModal 
                    onSubmit={handleSubmit}
                    names = {{
                      name,
                      company,
                      license,
                      cost,
                      passanger,
                      type,
                      date,
                      location,
                      rating
                    }}
                    handlers = {{
                      onClick: handleChange(setName),
                      onCompany: handleChange(setCompany),
                      onLicense: handleChange(setLicense),
                      onPassanger: handleChange(setPassanger),
                      onCost: handleChange(setcost),
                      onDate: handleChange(setData),
                      onType: handleChange(setType),
                      onRating: handleChange(setRating),
                      onLocation: handleChange(setLocation)
        
                    }}/>
                </DataControl>
                <ScrollSec>
                <Table>
                    <TableRow style={{ position:'sticky', top:'0', backgroundColor:'white'}}>
                        <th /* style={{paddingRight:'70px'}} */>No.</th>
                        <th>Car image</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>License</th>
                        <th>Passengers</th>
                        <th>Cost</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Rating</th>
                        <th>Location</th>
                        <th>Edit/Delete</th>
                    </TableRow>
                    {data.map((value, index)=>{
                        return(
                            <TableRow key={index}>
                                {update[index] ?
                                <>
                                  <td>{index + 1}</td>
                                  <td><FileInput type="file" /></td>
                                  <td><UpdateInputs type="text" name='name' onChange={(e) => setNewName(e.target.value)}value={value.name} /></td>
                                  <td><UpdateInputs type="text" name='company' onChange={(e) => setNewCompany(e.target.value)}value={value.company}/></td>
                                  <td><UpdateInputs type="text" name='license' onChange={(e) => setNewLicense(e.target.value)}value={value.license}/></td>
                                  <td><UpdateInputs type="text" name='passanger' onChange={(e) => setNewPassanger(e.target.value)}value={value.passanger} /></td>
                                  <td><UpdateInputs type="number" name='cost' onChange={(e) => setNewcost(e.target.value)}value={value.cost}/></td>
                                  <td><UpdateInputs type="text" name='type' onChange={(e) => setNewType(e.target.value)}value={value.type}/></td>
                                  <td><UpdateInputs type="date" name='date' onChange={(e) => setNewDate(e.target.value)}value={value.date}/></td>
                                  <td><UpdateInputs type="number" name='rating' onChange={(e) => setNewRating(e.target.value)}value={value.rating}/></td>
                                  <td><UpdateInputs type="text" name='location' onChange={(e) => setNewLocation(e.target.value)}value={value.location}/></td>
                                  <td><UpdateButton  onClick={(e) => {handleEdit(value.name);  handleClick(index);}}><SaveAsOutlinedIcon/></UpdateButton></td>
                                </>:<><td  style={{paddingLeft:'10px'}} >{index + 1}</td>
                                <td>{/* <img src={value.photo} alt="" width={50}/> */}<div>car photo</div></td>
                                <td>{value.name}</td>
                                <td>{value.company || 'no data'}</td>
                                <td>{value.license || 'no license'}</td>
                                <td>{value.passanger || 'no passanger'}</td>
                                <td>{value.cost}$</td>
                                <td>{value.type}</td>
                                <td>{value.date}</td>
                                <td>{value.rating}</td>
                                <td>{value.location}</td>
                                <td style={{display:'flex', gap:'10px'}}><EditButtonDiv onClick={() => handleClick(index)}><EditIcon sx={{fill:'white'}}/></EditButtonDiv><DeleteButtonDiv onClick={()=> handleDelete(value.name)}><DeleteIcon sx={{fill:'white'}}/></DeleteButtonDiv></td></>}
                            </TableRow>
                        )
                    })}
                </Table>
                </ScrollSec>
            </DataList>
        </div>
  )
}

export default TuningData