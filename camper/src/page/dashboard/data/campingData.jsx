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
import { CampingAddModal } from "../modal";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import SearchIcon from "@mui/icons-material/Search";

const CampingData = () => {
  const token = localStorage.getItem('token')
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
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
      const response = await fetch("http://localhost:5500/camping", {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      if(!response.ok){
        throw new Error("Error fetching data 'frontend'")
      }
      const motor = await response.json();
      setData(motor)
      setFilteredData(motor)
      console.log(motor) 
      
    } catch (error) {
      console.log("failed to fetch data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name !== ''){
      try {
        const res = await fetch("http://localhost:5500/camping", {
          method:'POST',
          headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
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
            license
          })
        })
        fetchData();
        setName("");
      } catch (error) {
        console.error("failure", error);
        
      }
    }
  }

  
  const handleEdit = async (id) => {
    try {
      const res = await fetch(`http://localhost:5500/camping/${id}`,{
        method:'PUT',
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          newName,
          newCompany,
          newLicense,
          newPassanger,
          newCost,
          newType,
          newDate,
          newRating,
          newLocation,
        })
      })
      if(res.ok){
        console.log('done')
      }else{
        console.log('failed res is not ok')
      }
      console.log(newName)
      setNewName("");
      fetchData();
    } catch (error) {
      console.error("error editing");
    }
  }

  const handleClick = (index) => {
    const newEditMode = [...update];
    newEditMode[index] = !newEditMode[index];
    setUpdate(newEditMode);
  };
  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };
  const handleDelete = async (id)=> {
    try {
      const res = await fetch(`http://localhost:5500/camping/${id}`,{
        method:'DELETE',
        headers:{
          "Content-Type":"application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      });;
      if (res.ok) {
        console.log('Data deleted successfully');
        fetchData();
    } else {
        console.error('Failed to delete data');
    }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  //filter//
  const handleSearch = (query) => {
    if(query && typeof query === "string"){
        const filtered = Array.isArray(data) ? data.filter((place)=> {
            return place.name && typeof place.name === "string" && place.name.toLowerCase().includes(query.toLowerCase())
        }):[];
        setFilteredData(filtered)
    }else{
      setFilteredData(data)
    }
  }
  return (
    <div>
      <DataList className="tablet">
        <DataControl>
          <h2>Camping places</h2>
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
          <CampingAddModal
            onSubmit={handleSubmit}
            names={{
              name,
              company,
              license,
              cost,
              passanger,
              type,
              date,
              location,
              rating,
            }}
            handlers={{
              onClick: handleChange(setName),
              onCompany: handleChange(setCompany),
              onLicense: handleChange(setLicense),
              onPassanger: handleChange(setPassanger),
              onCost: handleChange(setcost),
              onDate: handleChange(setDate),
              onType: handleChange(setType),
              onRating: handleChange(setRating),
              onLocation: handleChange(setLocation),
            }}
          />
        </DataControl>
        <ScrollSec>
          <Table>
            <TableRow $camping
              style={{ position: "sticky", top: "0", backgroundColor: "white" }}
            >
              <th /* style={{paddingRight:'70px'}} */>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>City</th>
              <th>Contact</th>
              <th>Working hours</th>
              <th>Website</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Edit/Delete</th>
            </TableRow>
            {filteredData.map((value, index) => {
              return (
                <TableRow key={index} style={{backgroundColor: index % 2 === 0 ? '#d8d8d836' :'white'}} $campingTable>
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
                          onChange={(e) => setNewName(e.target.value)}
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
                            handleEdit(value._id);
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
                        <div>Photo</div>
                      </td>
                      <td>{value.name}</td>
                      <td>{value.company || "no city"}</td>
                      <td>{value.license || "no contact"}</td>
                      <td>{value.passanger || "no working"}-</td>
                      <td>{value.cost || "no working"}</td>
                      <td>{value.type || "no website"}</td>
                      <td>{value.date || " no latitude"}</td>
                      <td>{value.rating || " not longitude"}</td>
                      {/* <td>{value.location}</td> */}
                      <td style={{ display: "flex", gap: "10px" }}>
                        <EditButtonDiv onClick={() => handleClick(index)}>
                          <EditIcon sx={{ fill: "white" }} />
                        </EditButtonDiv>
                        <DeleteButtonDiv
                          onClick={() => handleDelete(value._id)}
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

export default CampingData;
