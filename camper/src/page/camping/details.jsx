import React from 'react'
import { useParams } from 'react-router-dom';
import { Backgrounds, CampingMainDiv, Seperated } from '..//..//style';
import { BackgroundImg, CarDesName, CarSpec, CarSpecDesc, CarSpecInfo, CarSpecTitle, Home, HomeButton, MainContainer } from '../motor/documentStyle.';
import { Button } from '@mui/material';
import BasicTabs from '../../materials/tab';
import { campingPlace } from '../data/campingPlace';
import './styles.css'
import Map from '..//../assets/map.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import styled from 'styled-components';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CampSwiper from './campSwipe';
import Maping from '../../maping';

const StyledClock = styled(ScheduleOutlinedIcon)`
  font-size: 24px;
`
const StyledPhone = styled(PhoneOutlinedIcon)`
  font-size: 24px;
`
const StyledHome = styled(HomeOutlinedIcon)`
  font-size: 24px;
`

const StyledIcon = styled(LocationOnOutlinedIcon)`
  font-size: 24px; /* Adjust size as needed */
  color: #373738; /* Blue color */
`;

const CampingDetailComponent = () => {
    const data = campingPlace.maindata;
    let {id} = useParams();
    const separatedData = data.filter((value)=> value.id === parseInt(id));
    console.log(separatedData)
  return (
    <CampingMainDiv >
      <CampSwiper/>
        {separatedData.map((value)=>{
            return <div className='campingMainDiv' key={value.id}>
              <div className='campingTitle'>
                <h1>{value.campingPlace.name}</h1>
                <div className='mapSec'>{value.campingPlace.location} <button>Copy map</button></div>
              </div>
              <div className='info'>
                <p className='paragraph'><StyledIcon/>{value.campingPlace.city}</p>
                <p className='paragraph'><StyledPhone/> {value.campingPlace.phone_number}</p>
                <p className='paragraph'><StyledClock/> from <span>{value.campingPlace.working_hour.from}</span> to <span>{value.campingPlace.working_hour.to}</span></p>
                <p className='paragraph'><StyledHome/> <a href="google.com">{value.campingPlace.home_page}</a></p>
              </div>
              <div className='description'>
                <h3>Descrition</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel architecto quam alias sint mollitia, neque numquam cumque cupiditate! Quis atque consequuntur voluptatibus dolor error vitae vel nemo quam rerum ducimus repudiandae doloribus iusto, earum sit officiis, reprehenderit modi unde neque eius architecto fuga cupiditate dolore aliquam. Quia culpa, minima, cum quos impedit ut error explicabo voluptatibus quod amet, provident doloribus voluptatem quo facere. Eum, fugit autem! Ab dolore natus animi minima nisi aut, quam fugit corporis vitae iure veritatis accusantium perspiciatis veniam molestias voluptatum est! Esse placeat, ullam nesciunt amet consequatur perspiciatis culpa quae, hic, ad repellat quidem sit tempora.</p>
              </div>
              <Maping/>              
            </div>
        })}
    </CampingMainDiv>
  )
}

export default CampingDetailComponent