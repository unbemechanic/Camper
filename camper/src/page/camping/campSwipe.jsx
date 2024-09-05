import React from 'react'
import SImg1 from '..//..//assets/camping-places-1.webp'
import SImg2 from '..//..//assets/camping-places-2.jpeg'
import SImg3 from '..//..//assets/camping-places-3.jpg'
import SImg4 from '..//..//assets/camping-places-4.jpg'
import SImg5 from '..//..//assets/camping-places-5.webp'
import SImg6 from '..//..//assets/camping-places-6.webp'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 21%;
    padding-top: 40px;
    overflow-x: auto;
    gap: 10px;
    margin-bottom: 20px;
    /* overscroll-behavior-inline: contain; */

    img{
        inline-size: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 10px;
        padding: 5px 0;
    }
`

const CampSwiper = () => {
  return (
    <Container>
        <img src={SImg1}/>
        <img src={SImg2}/>
        <img src={SImg3}/>
        <img src={SImg4}/>
        <img src={SImg5}/>
        <img src={SImg6}/>
    </Container>
  )
}

export default CampSwiper