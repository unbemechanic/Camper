import React, { useState } from "react";
import OutputIcon from "@mui/icons-material/Output";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ProfileImg from "../../assets/login.jpeg";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import MotorData from "./data/motorData";
import {
  Buttons,
  Container,
  Content,
  Controller,
  Drawwer,
  Input,
  InputsDiv,
  Logout,
  Profile,
  ProfileLogo,
  Tabs,
} from "./style";
import CaravanData from "./data/caravanData";
import TuningData from "./data/tuningData";
import UsedCarData from "./data/usedCarData";
import CampingData from "./data/campingData";
import UserData from "./data/user";
import Tent from "..//..//assets/tent-bold.png";
import MotorIcon from "..//..//assets/motor-icon.png";
import CaravanIcon from "..//..//assets/camper-van.png";
import TuningIcon from "..//..//assets/tuning-icon.png";
import UsedIcon from "..//..//assets/used-car.png";
import UserIcon from "..//..//assets/user.png";
import DrawerIcon from "..//..//assets/drawer-icon.png";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Motor");
  const [color, setColor] = useState("Motor");
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setColor(tabName);
  };

  const toggleHandle = () => {
    setToggle(!toggle)
  }
  const logOutToken = async () => {
    localStorage.removeItem("token")
    alert('Token has been removed')
    navigate('/')
  }

  return (
    <Container className="sidebar">
      <Tabs className="tabs" style={{width: toggle ? '': '120px'}}>
        <Link to="/main" style={{ textDecoration: "none", color: "white", display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <h1 style={{fontSize: toggle ? '':'20px', lineHeight:'40px', transition:'all .5s ease-in-out'}}>Camper</h1>
        </Link>
        <Drawwer
            className="tent-icon"
            src={DrawerIcon}
            height={20}
            style={{transform: toggle ? 'rotate(180deg)': ''}}
            onClick={toggleHandle}
          />
        <Buttons
          style={{
            backgroundColor: color === "Motor" ? "#2f3d59" : "",
            marginTop: "40px",
          }}
          className={`tab ${activeTab === "Motor" ? "active" : ""}`}
          onClick={() => handleTabClick("Motor")}
        >
          <img
            className="tent-icon"
            src={MotorIcon}
            height={35}
            style={{ display: toggle ? 'none' :'', transition:'all .5s ease-in-out' }}
          />
          <p style={{display: toggle ? '' : 'none'}}>Motor</p> 
        </Buttons>
        <Buttons
          style={{ backgroundColor: color === "Caravan" ? "#2f3d59" : "" }}
          className={`tab ${activeTab === "Caravan" ? "active" : ""}`}
          onClick={() => handleTabClick("Caravan")}
        >
          <img
            className="tent-icon"
            src={CaravanIcon}
            height={35}
            style={{ display: toggle ? 'none' :'', transition:'all .5s ease-in-out'  }}
          />
          <p style={{display: toggle ? '' : 'none'}}>Caravan</p> 
        </Buttons>
        <Buttons
          style={{ backgroundColor: color === "Tuning" ? "#2f3d59" : "" }}
          className={`tab ${activeTab === "Tuning" ? "active" : ""}`}
          onClick={() => handleTabClick("Tuning")}
        >
          <img
            className="tent-icon"
            src={TuningIcon}
            height={35}
            style={{ display: toggle ? 'none' :'', transition:'all .5s ease-in-out'  }}
          />
          <p style={{display: toggle ? '' : 'none'}}>Tuning</p> 
        </Buttons>
        <Buttons
          style={{ backgroundColor: color === "Used Car" ? "#2f3d59" : "" }}
          className={`tab ${activeTab === "Used Car" ? "active" : ""}`}
          onClick={() => handleTabClick("Used Car")}
        >
          <img
            className="tent-icon"
            src={UsedIcon}
            height={35}
            style={{ display: toggle ? 'none' :'', transition:'all .5s ease-in-out'  }}
          />
          <p style={{display: toggle ? '' : 'none', whiteSpace:'nowrap'}}>Used Car</p> 
        </Buttons>
        <Buttons
          style={{
            backgroundColor: color === "Camping Places" ? "#2f3d59" : "",
          }}
          className={`tab ${activeTab === "Camping Places" ? "active" : ""}`}
          onClick={() => handleTabClick("Camping Places")}
        >
          <img
            className="tent-icon"
            src={Tent}
            height={35}
            style={{ display: toggle ? 'none' :'', transition:'all .5s ease-in-out'  }}
          />
          <p style={{display: toggle ? '' : 'none', whiteSpace:'nowrap'}}>Camping Places</p> 
        </Buttons>
        <Buttons
          style={{ backgroundColor: color === "User" ? "#2f3d59" : "" }}
          className={`tab ${activeTab === "User" ? "active" : ""}`}
          onClick={() => handleTabClick("User")}
        >
          <img
            className="tent-icon"
            src={UserIcon}
            height={35}
            style={{ display: toggle ? 'none' :'', transition:'all .5s ease-in-out'  }}
          />
          <p style={{display: toggle ? '' : 'none'}}>User</p> 
        </Buttons>
        <div className="marker">
          <div id="top"></div>
          <div id="bottom"></div>
        </div>
        {/* Add more tabs as needed */}
        {/* <Link to="/" style={{ textDecoration: "none", color: "white" }}> */}
          <Logout style={{width: toggle ? '':'70px'}} onClick={logOutToken}>
            <OutputIcon sx={{width:'35px',height:'35px'}}/>
            <p style={{display: toggle ? '' : 'none'}}>Log out</p> 
          </Logout>
        {/* </Link> */}
      </Tabs>
      <Content className="content">
        <Controller>
          
          <div>
            <NotificationsNoneOutlinedIcon fontSize="large" />
          </div>
          <Profile>
            <ProfileLogo width={50} src={ProfileImg} alt="" />
            <p>Jack William</p>
          </Profile>
        </Controller>
        {activeTab === "Motor" && <MotorData />}
        {activeTab === "Caravan" && <CaravanData />}
        {activeTab === "Tuning" && <TuningData />}
        {activeTab === "Used Car" && <UsedCarData />}
        {activeTab === "Camping Places" && <CampingData />}
        {activeTab === "User" && <UserData />}
      </Content>
    </Container>
  );
};

export default Dashboard;
