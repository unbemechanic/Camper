import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { campcar } from '../data/mockdata';
import RecomendedImg from '..//..//assets/img-1.png'
import RecomendedImg2 from '..//..//assets/img-7.webp'
import RecomendedImg3 from '..//..//assets/img-3.png'
import RecomendedImg4 from '..//..//assets/img-4.png'
import RecomendedImg5 from '..//..//assets/img-5.png'
import { RecomendedImgDivs, TiltedDiv } from './styles';
import './styles.css'
import { easing } from '@mui/material';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.,
    },
    tablet: {
      breakpoint: { max: 1300, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  

const MultiCarouselComponent = () => {
    const Recommended = campcar.maindata

  return (
    <div>
<Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={1500}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div style={{display:"flex", flexDirection:'column', alignItems:"center", gap:'10px'}}>
    <RecomendedImgDivs src={RecomendedImg} />
    <h4>{Recommended[1].car.name}</h4>
    <TiltedDiv>Discover the range</TiltedDiv>
    <div className='model'>Choose a model<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg> </div>
  </div>
  <div style={{display:"flex", flexDirection:'column', alignItems:"center", gap:'10px'}}>
    <RecomendedImgDivs src={RecomendedImg2} />
    <h4>{Recommended[7].car.name}</h4>
    <TiltedDiv>Discover the range</TiltedDiv>
    <div className='model'>Choose a model<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg> </div>
  </div>
  <div style={{display:"flex", flexDirection:'column', alignItems:"center", gap:'10px'}}>
    <RecomendedImgDivs src={RecomendedImg3} />
    <h4>{Recommended[3].car.name}</h4>
    <TiltedDiv>Discover the range</TiltedDiv>
    <div className='model'>Choose a model<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg> </div>
  </div>
  <div style={{display:"flex", flexDirection:'column', alignItems:"center", gap:'10px'}}>
    <RecomendedImgDivs src={RecomendedImg4} />
    <h4>{Recommended[4].car.name}</h4>
    <TiltedDiv>Discover the range</TiltedDiv>
    <div className='model'>Choose a model<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg> </div>
  </div>
  <div style={{display:"flex", flexDirection:'column', alignItems:"center", gap:'10px'}}>
    <RecomendedImgDivs  src={RecomendedImg5} />
    <h4>{Recommended[6].car.name}</h4>
    <TiltedDiv>Discover the range</TiltedDiv>
    <div className='model'>Choose a model<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg> </div>
  </div>

</Carousel>
    </div>
  )
}

export default MultiCarouselComponent



