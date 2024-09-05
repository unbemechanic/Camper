import React from 'react'
import { Link } from 'react-router-dom';
import { BodyDiv, CampingBox, CampingContainer, Heading, IndentedDiv, MainBodyDiv, MotorBodyContainer, MotorH, MotorHome} from '../../style';
import { campingPlace } from '../data/campingPlace';

const CampingComponent = () => {
    const data = campingPlace.maindata;
    
  return (
    <div>
        <BodyDiv>
            <MotorHome $camping>
                <MotorH $home>Home / Camping Places</MotorH>
                <MotorH $ranges>Our Sights</MotorH>
                <MotorH $motor>Camping Places</MotorH>
            </MotorHome>
            <IndentedDiv $motorBody>
                <MotorBodyContainer>
                <MainBodyDiv>
                    <CampingContainer>
                            {data.map((value)=>{
                                return(
                                    <Link style={{textDecoration:'none'}} to={`/camping/${value.id}`}>
                                        <CampingBox key={value.id}>
                                        <div>
                                        <img src={value.campingPlace.photo}   alt='car'/>
                                        </div>
                                        <div>
                                            <Heading $name>{value.campingPlace.name}</Heading>
                                            <Heading $brand>{value.campingPlace.location}</Heading>
                                        </div>
                                    </CampingBox>
                                    </Link>
                                )
                            })}
                        </CampingContainer>
                    <div></div>
                </MainBodyDiv>
                </MotorBodyContainer>
                
            </IndentedDiv>
        </BodyDiv>
    </div>
  )
}

export default CampingComponent