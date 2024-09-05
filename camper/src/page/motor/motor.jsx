import React, { useState } from 'react'
import { campcar } from '../data/mockdata'
import { BodyDiv, CompareDiv, ComparingCar, FilterButton, IndentedDiv, MainBodyDiv, MainSideBar, MotorBodyContainer, MotorH, MotorHome, MotorNavIn, NavBoxStyle, NavButton, } from '../../style';
import AccordionExpandDefault from '../../materials/arcadion';
import '..//..//index.css'
import UseStateComponent, { ExpandStyle, FilterSec, InputSearch, ListIconStyle, WindowStyle } from '../../useState/useState';
import Maping from '../../maping';
import { HorizontalFilter, VerticalFilterInput } from '../../useState/stylesUse';
import GridMenuComponent from '../../useState/gridMenu';
import VerticalMenuComponent from '../../useState/verticalMenu';
import SwipeableTemporaryDrawer2 from '../../materials/sidebarMenu';
import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '..//..//materials/mui.css'
import SizeCheckboxes from '../../materials/checkbox';

const MotorComponent = () => {
    const data = campcar.maindata;
    const [active, setActive] = useState(true);
    const horizontalMenuHandle = ()=> {
        setActive(true)
    }
    const verticalMenuHangle = ()=> {
        setActive(false)
    }
    const [selectedNames, setSelectedNames] = useState([]);
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [selectedLicenses, setSelectedLicenses] = useState([]);
    const [selectedPeople, setSelectedPeople] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);


    //grid data
    const [filter, setFilter] = useState(data);
    const handleChange = (e)=>{
    const searchQuery = e.target.value.toLowerCase();
    setFilter(data.filter((campcar)=> campcar.car.name.toLowerCase().includes(searchQuery)));
    }
    //study
    const uniqueCompanies = Array.from(
        new Set(data.map((item) => item.car.company.trim().toLowerCase()))
    ).map((company) => {
        return data.find(
            (item) => item.car.company.trim().toLowerCase() === company
        ).car.company;
    });
    const uniqueLicenses = Array.from(
        new Set(data.map((item) => item.car.license.trim().toLowerCase()))
    ).map((license) => {
        return data.find(
            (item) => item.car.license.trim().toLowerCase() === license
        ).car.license;
    });

    const uniquePeople = Array.from(
        new Set(data.map((item) => item.car.people.trim().toLowerCase()))
    ).map((people) => {
        return data.find(
            (item) => item.car.people.trim().toLowerCase() === people
        ).car.people;
    });

    const uniqueLocation = Array.from(
        new Set(data.map((item) => item.car.location.trim().toLowerCase()))
    ).map((location) => {
        return data.find(
            (item) => item.car.location.trim().toLowerCase() === location
        ).car.location;
    });
    const uniqueCarNames = Array.from(
        new Set(data.map((item) => item.car.name.trim().toLowerCase()))
    ).map((name) => {
        return data.find((item) => item.car.name.trim().toLowerCase() === name)
            .car.name;
    });
    //!need to study above
    const handleNameChange = (name) => {
    setSelectedNames((prevSelectedNames) => {
        const isSelected = prevSelectedNames.includes(name);
        if (isSelected) {
            return prevSelectedNames.filter((item) => item !== name);
        } else {
            return [...prevSelectedNames, name];
        }
    });
    };

    const handleCompanyChange = (companyName) => {
    setSelectedCompanies((prevSelectedCompanies) => {
        const isSelected = prevSelectedCompanies.includes(companyName);
        if (isSelected) {
            return prevSelectedCompanies.filter(
                (item) => item !== companyName
            );
        } else {
            return [...prevSelectedCompanies, companyName];
        }
    });
    };

    const handleLicenseChange = (licenseType) => {
    setSelectedLicenses((prevSelectedLicenses) => {
        const isSelected = prevSelectedLicenses.includes(licenseType);
        if (isSelected) {
            return prevSelectedLicenses.filter(
                (item) => item !== licenseType
            );
        } else {
            return [...prevSelectedLicenses, licenseType];
        }
    });
    };

    const handlePeopleChange = (peopleCount) => {
    setSelectedPeople((prevSelectedPeople) => {
        const isSelected = prevSelectedPeople.includes(peopleCount);
        if (isSelected) {
            return prevSelectedPeople.filter(
                (item) => item !== peopleCount
            );
        } else {
            return [...prevSelectedPeople, peopleCount];
        }
    });
    };

    const handleLocationChange = (location) => {
    setSelectedLocations((prevSelectedLocations) => {
        const isSelected = prevSelectedLocations.includes(location);
        if (isSelected) {
            return prevSelectedLocations.filter(
                (item) => item !== location
            );
        } else {
            return [...prevSelectedLocations, location];
        }
    });
    };

    const filteredData = filter.filter(
    (item) =>
        (selectedNames.length === 0 ||
            selectedNames.includes(item.car.name)) &&
        (selectedCompanies.length === 0 ||
            selectedCompanies.includes(item.car.company)) &&
        (selectedLicenses.length === 0 ||
            selectedLicenses.includes(item.car.license)) &&
        (selectedPeople.length === 0 ||
            selectedPeople.includes(item.car.people)) &&
        (selectedLocations.length === 0 ||
            selectedLocations.includes(item.car.location)) 
    );
    
  return (
    <div>
        <BodyDiv>
            <MotorHome>
                <MotorH $home>Home/Motors</MotorH>
                <MotorH $ranges>Our ranges</MotorH>
                <MotorH $motor>Motors</MotorH>
            </MotorHome>
            <IndentedDiv $motorBody>
                <MotorBodyContainer>
                <MainSideBar>
                    <NavBoxStyle>
                    <div>
                        <Accordion defaultExpanded sx={{backgroundColor: 'inherit',boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)'
                        }}>
                            <AccordionSummary sx={{backgroundColor: 'inherits', border:'none', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)', marginBottom:'30px'}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography><b>Cost of Car</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div  style={{display:'flex', gap:'30px'}}>
                                                <label style={{display:'grid', gap:'5px'}}>from
                                                    <MotorNavIn type='number'/>
                                                </label>
                                                <label  style={{display:'grid'}}>to
                                                    <MotorNavIn type='number'/>
                                                </label>
                                            </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded sx={{backgroundColor: 'inherit',boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)'
                        }}>
                            <AccordionSummary sx={{backgroundColor: 'inherits', borderTop:'none', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)', marginBottom:'30px'}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography><b>Brand</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                    {uniqueCompanies.map((value, index) => (
                                        <div style={{display:'flex', alignItems:'center'}} key={index}>
                                            <SizeCheckboxes
                                            id={`company-${index}`}
                                            type="checkbox"
                                            onChange={() =>
                                                handleCompanyChange(value)
                                            }/>
                                            <label htmlFor={`company-${index}`}>
                                                {value}
                                            </label>
                                        </div>
                                    ))}
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded sx={{backgroundColor: 'inherit',boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)'
                        }}>
                            <AccordionSummary sx={{backgroundColor: 'inherits', borderTop:'none', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)', marginBottom:'30px'}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography><b>Car Names</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            {uniqueCarNames.map((value, index) => (
                                <div style={{display:'flex', alignItems:'center'}} key={index}>
                                    <SizeCheckboxes
                                    id={`license${index}`}
                                    onChange={handleLicenseChange}
                                    />
                                    <label htmlFor={`license${index}`}>{value}</label>
                                </div>
                            ))}
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded sx={{backgroundColor: 'inherit',boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)'
                        }}>
                            <AccordionSummary sx={{backgroundColor: 'inherits', borderTop:'none', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)', marginBottom:'30px'}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography><b>Number of travelers</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            {uniquePeople.map((value, index)=>(
                                <div style={{display:'flex', alignItems:'center'}} key={index}>
                                    <SizeCheckboxes
                                        id={`people${index}`}
                                        onChange={handlePeopleChange}
                                    />
                                    <label htmlFor={`people${index}`}>{value}</label>
                                </div>
                            ))}
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded sx={{backgroundColor: 'inherit',boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)'
                        }}>
                            <AccordionSummary sx={{backgroundColor: 'inherits', borderTop:'none', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)', marginBottom:'30px'}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography><b>Number of travelers</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            {uniquePeople.map((value, index)=>(
                                <div style={{display:'flex', alignItems:'center'}} key={index}>
                                    <SizeCheckboxes
                                        id={`people${index}`}
                                        onChange={handlePeopleChange}
                                    />
                                    <label htmlFor={`people${index}`}>{value}</label>
                                </div>
                            ))}
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded sx={{backgroundColor: 'inherit',boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)'
                        }}>
                            <AccordionSummary sx={{backgroundColor: 'inherits', borderTop:'none', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)', marginBottom:'50px'}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography><b>Location</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            {uniqueLocation.map((value, index)=>(
                                <div style={{display:'flex', alignItems:'center'}} key={index}>
                                    <SizeCheckboxes
                                        id={`location${index}`}
                                        onChange={handleLocationChange}
                                    />
                                    <label htmlFor={`location${index}`}>{value}</label>
                                </div>
                            ))}
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    </NavBoxStyle>
                    <div style={{display:'flex', gap:'20px'}}>
                        <NavButton>Cancel</NavButton>
                        <NavButton $search>Search</NavButton>
                    </div>
                    <ComparingCar $main>
                        <div>Compare</div>
                        <ComparingCar>
                            <CompareDiv $first></CompareDiv>
                            <CompareDiv $second></CompareDiv>
                            <CompareDiv $third></CompareDiv>
                        </ComparingCar>
                    </ComparingCar>
                </MainSideBar>
                <MainBodyDiv>
                    {/* <UseStateComponent/> */}
                    <div>
                        <HorizontalFilter>
                            <div>
                                <b>Item</b> <b style={{color:'#006Dab'}}>{filteredData.length}</b> <FilterButton ><SwipeableTemporaryDrawer2/></FilterButton>
                            </div>
                            <FilterSec>
                                <div>
                                    <VerticalFilterInput $inputs><InputSearch type='text' onChange={handleChange} placeholder='Type to search'/></VerticalFilterInput><VerticalFilterInput $inputs><input style={{width:'40px'}} placeholder='60'/><ExpandStyle/></VerticalFilterInput>
                                </div>
                                <VerticalFilterInput $menu><WindowStyle onClick={horizontalMenuHandle}/><ListIconStyle onClick={verticalMenuHangle}/></VerticalFilterInput>
                            </FilterSec>
                            
                        </HorizontalFilter>
                        {active ? <GridMenuComponent filter={filteredData}/> : <VerticalMenuComponent filter={filteredData}/>}
                    </div>
                </MainBodyDiv>
                </MotorBodyContainer>
            </IndentedDiv>
        </BodyDiv>
    </div>
  )
}

export default MotorComponent