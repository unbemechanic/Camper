import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { campcar } from '../data/mockdata';
import HomeImg from '..//..//assets/carousel-img.png'
import HomeImg2 from '..//..//assets/carousel-img2.webp'
import './styles.css'
import { MainCarouselImg } from '../../style';
import styled from 'styled-components';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.,
    },
    tablet: {
      breakpoint: { max: 1300, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

const App = () => {
  return (
    <div>
<Carousel
  swipeable={false}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carouselContainer"
  // removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <MainCarouselImg $first></MainCarouselImg>
  <MainCarouselImg ></MainCarouselImg>
</Carousel>
    </div>
  )
}

export default App