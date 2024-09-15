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
  ScrollSec,
  Table,
  TableRow,
  UpdateButton,
  UpdateInputs,
} from "../style";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import { CaravanAddModal } from "../modal";
import UpdateIcon from "@mui/icons-material/Update";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";

const UserData = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [newName, setNewName] = useState();
  const [newEmail, setNewEmail] = useState();
  
  const [update, setUpdate] = useState(Array(data.length).fill(false));

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5500/sign-up");
      setData(response.data);
    } catch (error) {
      console.log("failed to fetch data", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name !== "") {
      try {
        const response = await axios.post("http://localhost:5500/user", {
          name,
          email
        });
        console.log(response.data);
        fetchData();
        setName("");
        setEmail("")
      } catch (error) {
        console.error("failure", error);
      }
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
    console.log("name is clicked");
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log("name is clicked");
  };
  
  const handleEdit = async (oldname) => {
    try {
      const response = await axios.put(
        `http://localhost:5500/sign-up/${oldname}`,
        {
          newName,
          newEmail
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
        `http://localhost:5500/user/${name}`
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

  return (
    <div>
      <DataList className="tablet">
        <DataControl>
          <b>User list</b>
        </DataControl>
        <ScrollSec>
          <Table>
            <TableRow>
              <th style={{display:'flex'}}>No.</th>
              <th>User</th>
              <th>Email</th>
              <th>Edit/Delete</th>
            </TableRow>
            {data.map((value, index) => {
              return (
                <TableRow  key={index}>
                  {update[index] ? (
                    <>
                      <td>1</td>
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
                          onChange={(e) => setNewEmail(e.target.value)}
                          value={value.company}
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
                      <td style={{ display:'flex', marginLeft:'-100px' }}>{index + 1}</td>
                   
                      <td>{value.name}</td>
                      <td>{value.email || "no data"}</td>
                      <td style={{ display: "flex", gap: "10px" }}>
                        <EditButtonDiv onClick={() => handleClick(index)}>
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

export default UserData;
