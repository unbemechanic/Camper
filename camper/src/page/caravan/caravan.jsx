import React, { useState } from 'react'
import { BodyDiv, BodyIcons, BoxingCars, CompareDiv, ComparingCar, Cost, DisInfoNav, FilterMenu, Heading, IndentedDiv, InfoNav, InfoNavInner, MainBodyDiv, MainSideBar, MotorBodyContainer, MotorH, MotorHome, MotorNavIn, NavBoxStyle, NavButton, SelectBox, SelectSec, SelectSecMin, SortBySec, StylingBoxes } from '..//..//style';
import AccordionExpandDefault from '../../materials/arcadion';
import { caravan } from '../data/caravan';
import { UseStateCaravanComponent } from '../../useState/useState';

const MotorComponent = () => {
    const data = caravan.maindata;
    const [filter, setFilter] = useState(data);
    const handleChange = (e)=>{
        const searchQuery = e.target.value.toLowerCase();
        setFilter(data.filter((campcar)=> campcar.car.name.toLowerCase().includes(searchQuery)));
        };
        
        // const filteredData = filter.filter(
        //     (item) =>
        //         (selectedNames.length === 0 ||
        //             selectedNames.includes(item.car.name)) &&
        //         (selectedCompanies.length === 0 ||
        //             selectedCompanies.includes(item.car.company)) &&
        //         (selectedLicenses.length === 0 ||
        //             selectedLicenses.includes(item.car.license)) &&
        //         (selectedPeople.length === 0 ||
        //             selectedPeople.includes(item.car.people)) &&
        //         (selectedLocations.length === 0 ||
        //             selectedLocations.includes(item.car.location)) 
        //     );
  return (
    <div>
        <BodyDiv>
            <MotorHome $caravan>
                <MotorH $home>Home/Caravan</MotorH>
                <MotorH $ranges>Our ranges</MotorH>
                <MotorH $motor>Caravan</MotorH>
            </MotorHome>
            <IndentedDiv $motorBody>
                <MotorBodyContainer>
                <MainSideBar>
                    <NavBoxStyle>
                        <AccordionExpandDefault></AccordionExpandDefault>
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
                    <UseStateCaravanComponent />
                </MainBodyDiv>
                </MotorBodyContainer>
                
            </IndentedDiv>
        </BodyDiv>
    </div>
  )
}

export default MotorComponent