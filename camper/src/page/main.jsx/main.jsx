import React from "react";
import App from "./App";
import MultiCarouselComponent from "./multiCarousel";
import { BlogsContainer, MainSecDiv, VideoDiv } from "./styles";
import BlogsImg1 from '..//..//assets/blogs-img-1.png'
import BlogsImg2 from '..//..//assets/blogs-img-2.png'
import BlogsImg3 from '..//..//assets/blogs-img-3.png'
import BlogsImg4 from '..//..//assets/blogs-img-4.png'
import BlogsImg5 from '..//..//assets/blogs-img-5.png'
import BlogsImg6 from '..//..//assets/blogs-img-6.png'
import VideoModal, { VideoModal2, VideoModal3, VideoModal4, VideoModal5, VideoModal6, VideoModal7, VideoModal8 } from "./modal";





const MainComponent = () => {
  return (
    <div>
        <MainSecDiv>
            <App />
            <h1>Recommend</h1>
            <MultiCarouselComponent/>
            <h1>Videos</h1>
            <VideoDiv>
            <VideoModal/>
            <VideoModal2/>
            <VideoModal3/>
            <VideoModal4/>
            <VideoModal5/>
            <VideoModal6/>
            <VideoModal7/>
            <VideoModal8/>
            </VideoDiv>
            <h1>Blogs</h1>
            <BlogsContainer>
                <div>
                    <h2>Camper</h2>
                    <h3>@camper_1</h3>
                    <p>Camping truly is for everyone, from your oldest family member to little campers just trekking out for the first time. Whether your plan is to relax, explore or reconnect, CAMPER campgrounds are a great place to create memories with those you love.</p>
                </div>
                <div className="blog-image-div">
                    <img src={BlogsImg1} alt="Blogs Image 1" />
                    <img src={BlogsImg2} alt="Blogs Image 2" />
                    <img src={BlogsImg3} alt="Blogs Image 3" />
                    <img src={BlogsImg4} alt="Blogs Image 4" />
                    <img src={BlogsImg5} alt="Blogs Image 5" />
                    <img src={BlogsImg6} alt="Blogs Image 6" />
                </div>
            </BlogsContainer>
            
        </MainSecDiv>
        
    </div>
  )
}

export default MainComponent

