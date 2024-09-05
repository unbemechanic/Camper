import styled from "styled-components";


export const TiltedDiv = styled.div`
    width: 200px;
  height: 50px;
  background-color: #006DAB; /* Blue color */
  transform: skew(-20deg); /* Tilt the rectangle */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`

export const MainSecDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    background-color: white;
    text-align: center;
    flex-shrink: 0;
    h1{
        color: var(--text, #373737);
        font-family: Montserrat;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border-bottom: 2px solid #FF7A00;
        margin: 30px 0;

        margin-inline: auto;
    }
    h2{
        color: #000;
        font-family: Montserrat;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 30px;
    }
    h3{
        color: var(--sariq, #FF7A00);
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 12px;
    }
    p{
        color: #000;
        font-family: Montserrat;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: left;
        margin-inline: 20px;
    }
`
export const RecomendedImgDivs = styled.img`
    width: 29s0px;
    height: 167px;
`
export const BlogsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    max-width: 1300px;
    margin-inline: auto;
    margin-bottom: 30px;
    @media (max-width: 1300px){
        grid-template-columns: 1fr;
        max-width: 1000px;
    }
`
export const VideoDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1300px;
    margin-inline: auto;
    gap: 20px;
    @media (max-width: 1300px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
`