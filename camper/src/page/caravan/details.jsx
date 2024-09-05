import React from 'react'
import { useParams } from 'react-router-dom';
import { Backgrounds, Seperated } from '..//..//style';
import { BackgroundImg, CarDesName, CarSpec, CarSpecDesc, CarSpecInfo, CarSpecTitle, Home, HomeButton, MainContainer } from '../motor/documentStyle.';
import { Button } from '@mui/material';
import BasicTabs from '../../materials/tab';
import { caravan } from '../data/caravan';

const CaravanDetailComponent = () => {
    const data = caravan.maindata;
    let {id} = useParams();
    const separatedData = data.filter((value)=> value.id === parseInt(id));
    console.log(separatedData)
  return (
    <div style={{backgroundColor:'#fafafa'}}>
        {separatedData.map((value)=>{
            return <Seperated key={value.id}>
              <div>
              <Home>
                  <h1>{value.caravan.name}</h1>
                  <HomeButton>
                  <Button variant="contained">ADD TO CART</Button>
                  <Button sx={{color:'white', border:' 1px solid white'}} variant="outlined">COMPARE</Button>
                  </HomeButton>
                </Home>
                <MainContainer>
                  <CarSpec style={{marginBottom:'80px'}}>
                    <img style={{maxWidth:'600px'
                    }} src={value.caravan.image}/>
                    <CarSpecInfo>
                      <CarDesName $title>
                          <h2>{value.caravan.name}</h2><CarSpecTitle>{value.caravan.price} Won</CarSpecTitle>
                      </CarDesName>
                      <div>
                        <CarSpecDesc>
                        <div>Company</div><div>{value.caravan.company}</div>
                        </CarSpecDesc>
                        <CarSpecDesc>
                        <div>People</div>{value.caravan.people}
                        </CarSpecDesc>
                        <CarSpecDesc>
                        <div>Licence type</div>{value.caravan.license}
                        </CarSpecDesc>
                      </div>
                    </CarSpecInfo>
                  </CarSpec>
                  <CarSpec>
                    <div>
                      <h2>Comfort</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
                    </div>
                    <BackgroundImg></BackgroundImg>
                  </CarSpec>
                  <CarSpec>
                  <BackgroundImg $second></BackgroundImg>
                    <div>
                      <h2>Tidying away is child’s play!</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
                    </div>
                    
                  </CarSpec>
                  <CarSpec>
                    <div>
                      <h2>Ventilated , Lit up</h2>
                      <p>In our vans and motorhomes, all our body lighting is 100% LED: a guarantee of energy efficiency and durability.
                      As for ventilation, we also often offer double ventilation in the bathroom (Skylight + window), which is very popular with our customers…
                      Camper relies on legendary Seitz windows. They offer the best insulation and are also the easiest to use and safest because they can’t be removed from the outside.												
                                </p>
                    </div>
                    <BackgroundImg $third></BackgroundImg>
                  </CarSpec>
                  <CarSpec>
                  <BackgroundImg $fourth></BackgroundImg>
                    <div>
                      <h2>Easy access</h2>
                      <p>We add little touches that your joints will thank you for…
                      All our motorhomes are equipped with a built-in step to facilitate entry to the vehicle
                      All our vans are equipped with an electric step.</p>
                    </div>
                    
                  </CarSpec>
                  <CarSpec>
                    <div>
                      <h2>Heating when driving</h2>
                      <p>Fuel heating is now very popular in the industry, but this was not always the case; Camper (once again) led the way in this area over 15 years ago. <br/>
                      One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.												
                                </p>
                                <Button variant="contained">ADD TO CART</Button>
                                <Button variant="outlined">COMPARE</Button>
                    </div>
                    <BackgroundImg $fifth></BackgroundImg>
                  </CarSpec>
                </MainContainer>
                <BasicTabs/>
              </div>
                
            </Seperated>
        })}
    </div>
  )
}

export default CaravanDetailComponent