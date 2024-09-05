import React, { useState } from 'react'
import GridMenuComponent, { Buttons, Container, FunctionButtons, GridMenuCaravanComponent, GridMenuTuningComponent, GridMenuUsedCarComponent, Rating, SLink, Star } from './gridMenu';
import VerticalMenuComponent, { BLink, ButtonFunction, ButtonSec, PriceDescription, SLinkV, VerticalMenuCaravanComponent, VerticalMenuTuningComponent, VerticalMenuUsedCarComponent } from './verticalMenu';
import { campcar } from '../page/data/mockdata';
import { FilterButton } from '../style';
import SwipeableTemporaryDrawer2 from '../materials/sidebarMenu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import { HorizontalFilter, VerticalFilterInput } from './stylesUse';
import { caravan } from '../page/data/caravan';
import { tuning } from '../page/data/tuning';
import { usedCar } from '../page/data/usedCars';
import { Link } from 'react-router-dom';

// styles
export const ExpandStyle = styled(ExpandMoreIcon)`
    font-size: 1.5rem;
    padding-inline: 5px;
    cursor: pointer;
    border-left: 1px solid black;
    /* background-color: red; */
    padding: 5px;
`

export const ListIconStyle = styled(ViewListRoundedIcon)`
    padding: 5px 0;

    padding-inline: 5px 2px;
    padding-left: 5px;
    padding-right: 7px;
    margin-left: -10px;
    color: rgba(55, 55, 55, 0.40);
    &:hover{
        cursor: pointer;
    }
`
export const WindowStyle = styled(WindowSharpIcon)`
    font-size: 1.5rem;
    padding-inline: 0px;
    border-right:1px solid gray;
    &:hover{
        cursor: pointer;
    }
    padding: 5px;
`
export const FilterSec = styled.div`
    display: flex;
    white-space: nowrap;
    @media (max-width: 950px){
        flex-wrap: wrap-reverse;
        justify-content: flex-end;
    }
`
export const InputSearch = styled.input`
  min-width: 600px;
  @media (max-width: 1100px){
    min-width: 300px;
  }
  @media (max-width: 850px){
    min-width: 200px;
  }
`



const UseStateComponent = () => {
    const [active, setActive] = useState(true);
    const horizontalMenuHandle = ()=> {
        setActive(true)
    }
    const verticalMenuHangle = ()=> {
        setActive(false)
    }
    const data = campcar.maindata;
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
    // 새로운 핸들러 추가
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
    //grid data end

    //vertical data
    //end
    return (
    <div>
        <HorizontalFilter>
            <div>
                <b>Item</b> <b style={{color:'#006Dab'}}>{filteredData.length}</b> <FilterButton><SwipeableTemporaryDrawer2/></FilterButton>
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
  )
}

export default UseStateComponent

export const UseStateCaravanComponent = () => {
    const [active, setActive] = useState(true);
    const horizontalMenuHandle = ()=> {
        setActive(true)
    }
    const verticalMenuHangle = ()=> {
        setActive(false)
    }
    const data = caravan.maindata;
  return (
    <div>
        <HorizontalFilter>
            <div>
                <b>Item</b> <b style={{color:'#006Dab'}}>{data.length}</b> <FilterButton><SwipeableTemporaryDrawer2/></FilterButton>
            </div>
            <FilterSec>
                <div>
                    <VerticalFilterInput $inputs><InputSearch type='text' /* onChange={handleChange} */ placeholder='Type to search'/></VerticalFilterInput><VerticalFilterInput $inputs><input style={{width:'40px'}} placeholder='60'/><ExpandStyle/></VerticalFilterInput>
                </div>
                <VerticalFilterInput $menu><WindowStyle onClick={horizontalMenuHandle}/><ListIconStyle onClick={verticalMenuHangle}/></VerticalFilterInput>
            </FilterSec>
            
        </HorizontalFilter>
        {active ? <GridMenuCaravanComponent/> : <VerticalMenuCaravanComponent/>}
    </div>
  )
}


export const UseStateTuningComponent = () => {
    const [active, setActive] = useState(true);
    const horizontalMenuHandle = ()=> {
        setActive(true)
    }
    const verticalMenuHangle = ()=> {
        setActive(false)
    }
    const data = tuning.maindata;
  return (
    <div>
      <HorizontalFilter>
            <div>
                <b>Item</b> <b style={{color:'#006Dab'}}>{data.length}</b> <FilterButton><SwipeableTemporaryDrawer2/></FilterButton>
            </div>
            <FilterSec>
                <div>
                    <VerticalFilterInput $inputs><InputSearch type='text' /* onChange={handleChange} */ placeholder='Type to search'/></VerticalFilterInput><VerticalFilterInput $inputs><input style={{width:'40px'}} placeholder='60'/><ExpandStyle/></VerticalFilterInput>
                </div>
                <VerticalFilterInput $menu><WindowStyle onClick={horizontalMenuHandle}/><ListIconStyle onClick={verticalMenuHangle}/></VerticalFilterInput>
            </FilterSec>
            
        </HorizontalFilter>
        {active ? <GridMenuTuningComponent/> : <VerticalMenuTuningComponent/>}
    </div>
  )
}
export const UseStateUsedCarComponent = () => {
    const [active, setActive] = useState(true);
    const horizontalMenuHandle = ()=> {
        setActive(true)
    }
    const verticalMenuHangle = ()=> {
        setActive(false)
    }
    const data = usedCar.maindata;
  return (
    <div>
        <HorizontalFilter>
            <div>
                <b>Item</b> <b style={{color:'#006Dab'}}>{data.length}</b> <FilterButton><SwipeableTemporaryDrawer2/></FilterButton>
            </div>
            <FilterSec>
                <div>
                    <VerticalFilterInput $inputs><InputSearch type='text'/*  onChange={handleChange} */ placeholder='Type to search'/></VerticalFilterInput><VerticalFilterInput $inputs><input style={{width:'40px'}} placeholder='60'/><ExpandStyle/></VerticalFilterInput>
                </div>
                <VerticalFilterInput $menu><WindowStyle onClick={horizontalMenuHandle}/><ListIconStyle onClick={verticalMenuHangle}/></VerticalFilterInput>
            </FilterSec>
            
        </HorizontalFilter>
        {active ? <GridMenuUsedCarComponent/> : <VerticalMenuUsedCarComponent/>}
    </div>
  )
}