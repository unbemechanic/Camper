import React from 'react'
import { campcar } from '../data/mockdata'
import { Link } from 'react-router-dom';
import { BodyDiv, BodyIcons, BoxingCars, CompareDiv, ComparingCar, Cost, DisInfoNav, FilterMenu, Heading, IndentedDiv, InfoNav, InfoNavInner, MainBodyDiv, MainSideBar, MotorBodyContainer, MotorH, MotorHome, MotorNavIn, NavBoxStyle, NavButton, SelectBox, SelectSec, SelectSecMin, SortBySec, StylingBoxes } from '../../style';
import CustomizedSelects from '../../materials/select';
import AccordionExpandDefault from '../../materials/arcadion';
import SwipeableTemporaryDrawer from '../../materials/navbarMenu';
import SwipeableTemporaryDrawer2 from '../../materials/sidebarMenu';
import { tuning } from '../data/tuning';
import { UseStateTuningComponent } from '../../useState/useState';

const TuningComponent = () => {
    const data = tuning.maindata;
    
  return (
    <div>
        <BodyDiv>
            <MotorHome $tuning>
                <MotorH $home>Home/Tuning</MotorH>
                <MotorH $ranges>Our ranges</MotorH>
                <MotorH $motor>Tunings</MotorH>
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
                    <UseStateTuningComponent/>
                </MainBodyDiv>
                </MotorBodyContainer>
            </IndentedDiv>
        </BodyDiv>
    </div>
  )
}

export default TuningComponent