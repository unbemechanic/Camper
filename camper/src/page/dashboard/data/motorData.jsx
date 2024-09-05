import React, { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  DataControl,
  DataList,
  DeleteButtonDiv,
  EditButtonDiv,
  FileInput,
  FilterButton,
  Input,
  InputsDiv,
  ScrollSec,
  Table,
  TableRow,
  UpdateButton,
  UpdateInputs,
} from "../style";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import MotorAddModal from "../modal";
import UpdateIcon from "@mui/icons-material/Update";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import SearchIcon from "@mui/icons-material/Search";

const MotorData = () => {
  const token = localStorage.getItem('token')

  console.log(token, 'this is token')
 
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
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
  const [update, setUpdate] = useState(Array(data.length).fill(false));


  const fetchData = async () => {
    try {
      // console.log("checking if token is alright",token)
      const response = await fetch("http://localhost:5500/motor", {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      if(!response.ok){
        throw new Error("Error fetching data 'frontend'")
      }
      const motor = await response.json();
      setData(motor)
      console.log(data) 
      
    } catch (error) {
      console.log("failed to fetch data", error);
    }
  };
  useEffect(() => {
    fetchData()
  }, [token]);

  useEffect(()=>{
    setFilteredData(data)
  }, [data]);

   
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name !== '') {
      if(!token){
        console.log('no token in the 84')
      }
      try {
        const response = await fetch("http://localhost:5500/motor", {
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
          body: JSON.stringify({
          name,
          company,
          cost,
          rating,
          passanger,
          type,
          date,
          location,
          license,
        })
        });
        const motor = await response.json();
        console.log(motor)
        if(response.ok){
        console.log(motor);
        fetchData();
        setName("");
        setCompany("");
        setcost("");
        setLocation("");
        setPassanger("");
        setType("");
        setDate("");
        setLicense("");
        setRating("");
        }
      } catch (error) {
        console.error("failure", error);
      }
    }
  };

  
  //filter
  const handleSearch = (query) => {
    console.log('data is ', data)
    if(query && typeof query === "string"){
      const filtered = Array.isArray(data) ? data.filter((motor) => {
       return motor.name && typeof motor.name === "string" && motor.name.toLowerCase().includes(query.toLowerCase()); 
      }) : [];
    setFilteredData(filtered);
    console.log("search is working", filtered);
    }else{
      setFilteredData(data)
      console.log('query is not filtering')
    }
    
  };
  //filter ends

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

 

  const handleEdit = async (oldname) => {
    try {
      const response = await axios.put(
        `http://localhost:5500/motor/${oldname}`,
        {
          newName,
          newCompany,
          newLicense,
          newPassanger,
          newCost,
          newType,
          newDate,
          newRating,
          newLocation,
        }
      );
      setNewName("");
      fetchData();
    } catch (error) {
      console.error("error editing");
    }
  };

  const handleDelete = async (name) => {
    try {
      const response = await axios.delete(
        `http://localhost:5500/motor/${name}`
      );
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick = (index) => {
    const newEditMode = [...update];
    newEditMode[index] = !newEditMode[index];
    setUpdate(newEditMode);
  };
  const handleChangeNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleChangeNewNameChange = (e) => {
    setNewName(name);
  };

  return (
    <div>
      <DataList className="tablet">
        <DataControl>
          <b>Car list</b>
          <InputsDiv>
            <Input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Type to search..."
            />
            <SearchIcon />
          </InputsDiv>

          <FilterButton>
            <SortOutlinedIcon /> Filter
          </FilterButton>

          <MotorAddModal
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

            }}
          />
        </DataControl>
        <ScrollSec>
          <Table>
            <TableRow
              style={{ position: "sticky", top: "0", backgroundColor: "white" }}
            >
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
            {filteredData.map((value, index) => {
              return (
                <TableRow key={index}>
                  {update[index] ? (
                    <>
                      <td>{index + 1}</td>
                      <td>
                        <FileInput type="file" />
                      </td>
                      <td>
                        <UpdateInputs
                          type="text"
                          name="name"
                          onChange={handleChangeNewName}
                          placeholder={value.name}
                        />
                      </td>
                      <td>
                        <UpdateInputs
                          type="text"
                          name="company"
                          onChange={(e) => setNewCompany(e.target.value)}
                          placeholder={value.company}
                        />
                      </td>
                      <td>
                        <UpdateInputs
                          type="text"
                          name="license"
                          onChange={(e) => setNewLicense(e.target.value)}
                          placeholder={value.license}
                        />
                      </td>
                      <td>
                        <UpdateInputs
                          type="text"
                          name="passanger"
                          onChange={(e) => setNewPassanger(e.target.value)}
                          placeholder={value.passanger}
                        />
                      </td>
                      <td>
                        <UpdateInputs
                          type="number"
                          name="cost"
                          onChange={(e) => setNewcost(e.target.value)}
                          placeholder={value.cost}
                        />
                      </td>
                      <td>
                        <UpdateInputs
                          type="text"
                          name="type"
                          onChange={(e) => setNewType(e.target.value)}
                          placeholder={value.type}
                        />
                      </td>
                      <td>
                        <UpdateInputs
                          type="date"
                          name="date"
                          onChange={(e) => setNewDate(e.target.value)}
                          placeholder={value.date}
                        />
                      </td>
                      <td>
                        <UpdateInputs
                          type="number"
                          name="rating"
                          onChange={(e) => setNewRating(e.target.value)}
                          placeholder={value.rating}
                        />
                      </td>
                      <td>
                        <UpdateInputs
                          type="text"
                          name="location"
                          onChange={(e) => setNewLocation(e.target.value)}
                          placeholder={value.location}
                        />
                      </td>
                      <td>
                        <UpdateButton
                          onClick={(e) => {
                            handleEdit(value.name);
                            handleClick(index);
                          }}
                        >
                          <SaveAsOutlinedIcon />
                        </UpdateButton>
                      </td>
                    </>
                  ) : (
                    <>
                      <td style={{ paddingLeft: "10px" }}>{index + 1}</td>
                      <td>
                        {/* <img src={value.photo} alt="" width={50}/> */}
                        <div>car photo</div>
                      </td>
                      <td>{value.name}</td>
                      <td>{value.company || "no data"}</td>
                      <td>{value.license || "no license"}</td>
                      <td>{value.passanger || "no passanger"}</td>
                      <td>{value.cost}$</td>
                      <td>{value.type}</td>
                      <td>{value.date}</td>
                      <td>{value.rating}</td>
                      <td>{value.location}</td>
                      <td style={{ display: "flex", gap: "10px" }}>
                        <EditButtonDiv
                          onClick={() => {
                            handleClick(index);
                            setNewName(value.name);
                          }}
                        >
                          <EditIcon sx={{ fill: "white" }} />
                        </EditButtonDiv>
                        <DeleteButtonDiv
                          onClick={() => handleDelete(value.name)}
                        >
                          <DeleteIcon sx={{ fill: "white" }} />
                        </DeleteButtonDiv>
                      </td>
                    </>
                  )}
                </TableRow>
              );
            })}
          </Table>
        </ScrollSec>
      </DataList>
    </div>
  );
};

export default MotorData;
