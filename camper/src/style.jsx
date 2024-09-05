import styled from "styled-components";
import MotorHomeImg from '..//src/assets/motorHome.png'
import Compare1 from '..//src/assets/compare-1.png'
import Compare2 from '..//src/assets/compare-2.png'
import Compare3 from '..//src/assets/compare-3.png'
import { startTransition } from "react";
import Meny from '..//src/assets/menuButton.svg'
import MenuIcon from '@mui/icons-material/Menu';
import SignIcons from '..//src/assets/signIcon.png'
import MainCarouselImg1 from '..//src/assets/carousel-img.png'
import MainCarouselImg2 from '..//src/assets/carousel-img2.webp'
import CampingHomeImg from '..//src/assets/camping-places-12.jpg'
import DotMenu from '..//src/assets/fourdotMenu.png'
import CaravanHome from '..//src/assets/caravan-header-3.webp'
import TuningHomeImg from '..//src/assets/tuning-header-7.jpg'
import UsedCarHomeImg from '..//src/assets/used-header.jpg'
import HomeImg from '..//src/assets/home.jpg'
import CartImg1 from '..//./src/assets/img-11.webp'


export const IndentedDiv = styled.div`
    width: 90%;
    margin-inline: auto;
    display: ${(props)=>props.$motorBody ? 'flex' : ''};
    column-gap: ${(props)=>props.$motorBody ? '20px' : ''};
    
    
`

export const MainCarouselImg = styled.div`
    background-image: url(${(props)=>props.$first ? `${MainCarouselImg1} ` : `${MainCarouselImg2}`});
    background-size: cover;
    background-position: ${(props)=>props.$first ? 'bottom' : `center`};
    height: 70vh;
    width: 100vw;
    background-repeat: no-repeat;
    /* background-image: url(${(props)=>props.$cart ? `${CartImg1}`:``}); */
    /* margin-top: 100px; */
    /* width: ${(props)=> props.$cart ?'100%' :'100vw'}; */
    /* height: ${(props)=> props.$cart ?'auto' :'70vw'}; */

`

export const SignBackground = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: #130e0e7e;
    backdrop-filter: blur(8px);
    z-index: 1000;
    background-position: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

`
export const RegisterBackground = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 999999999;
    top: 0;
    

    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-10deg, #ba3d17, #f4327c, #448ca6, #16b73e, #b7a716);
	background-size: 400% 400%;
	animation: gradient 8s ease infinite;
    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`


export const SignContainer = styled.form`
    background-color: #fff;
    height: 517px;
    width: 450px;
    border: none;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    color: rgba(55, 55, 55, 0.80);
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    h2{
        margin-bottom: 20px;
        color: #373737;
        font-family: "Open Sans";

    }
    div{
        margin-bottom: 5px;
    }
`
export const SignInnerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${(props)=>props.$icons ? `url(${SignIcons})` :''};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 30px;
    :last-child{
        margin-left: auto;
    }
`
export const SignOr = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    margin: 20px;
`
export const LongDash = styled.div`
    height: 1px;
    width: 130px;
    background: rgba(55, 55, 55, 0.15);

`
export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;

`
export const SocialIcon = styled.div`
    height: 40px;
        width: 40px;
        background-color: ${(props)=>props.$n ? '#039600': (props)=>props.$g ? '#BC0000':'#FFC700'};
        border-radius: 50%;
        font-size: 25px;
        font-weight: 900;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
`

export const SignTypography = styled.div`
    color: rgba(55, 55, 55, 0.80);
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const MotorBodyContainer = styled.div`
    margin: 0 auto;
    display: flex;
    gap: 50px;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
`

export const NavDisSecLang = styled.div`
    display: flex;
    align-items: center;
    :nth-child(1){
        @media (max-width: 1300px){
            margin-right: 50px;
        }
    }
`
export const NavDisSec = styled.div`
    display: flex;
    align-items: center;
    :last-child{
        border: none;
    }
    @media (max-width: 1300px){
        display: none;
    }
`
export const DirectH = styled.div`
    display: inline-flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: ${(props)=>props.$name ? '38px' :(props)=>props.$footer ?'38px': '16px'} ;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${(props)=>props.$name ? '#006DAB' : (props)=>props.$footer ?'white':''};
    flex-wrap: nowrap;
    white-space: nowrap;
`
export const MenuButton = styled.div`
    background-image: url(${Meny});
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    top: 35px;
    right: 40px;
    &:hover{
        cursor: pointer;
    }
    @media(min-width: 1300px) {
        display: none;
    }
`

export const FilterMenuButton = styled.div`
    background-image: url(${MenuIcon});
    background-repeat: no-repeat;
    display: none;
    @media(max-width: 1430px){
        display: flex;
    }
`
export const DirectContainer = styled.div`
    display: inline-flex;
    padding: 30px;
    justify-content: center;
    align-items: center;
    gap: 45px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: ${(props)=>props.$name ? '38px' :(props)=>props.$footer ?'38px': '16px'} ;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${(props)=>props.$name ? '#006DAB' : (props)=>props.$footer ?'white':''};
    flex-wrap: nowrap;
    white-space: nowrap;
    @media(max-width: 1300px){
    display: none;
}
`
export const FooterStyle = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    color: white;
    padding: 30px 0 80px 0 ;
    :first-child{
        text-align: start;
        height: 40px;
        padding: 0;
    }
    @media (max-width: 700px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`
export const FooterH = styled.div`
    color: #FFF;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin
    .div{
        margin: 10px;
    }
    :first-child{
        margin-bottom: 50px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        @media (max-width: 700px){
            margin-bottom: 20px;
            margin-top: 20px;
        }
    }
`
export const MotorHome = styled.div`
    width: 100%;
    text-align: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 50%, rgba(0, 0, 0, 0.50) 90%), url(${(props)=>props.$camping ? `${CampingHomeImg}` :(props)=>props.$caravan ? `${CaravanHome}` : (props)=>props.$tuning ? `${TuningHomeImg}` : (props)=>props.$usedCar ? `${UsedCarHomeImg}` : `${HomeImg}`}) lightgray 50% / cover no-repeat;
    background-size: cover;
    padding: 210px 0;
    margin-inline: auto;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    /* padding-top: 190px; */
`
export const MotorH = styled.div`
    color: #FFF;
    font-family: Montserrat;
    font-size: ${(props)=>props.$motor ? '80px' : (props)=>props.$ranges ? '27px' :'16px'};
    font-style: normal;
    font-weight: ${(props)=>props.$home ? '500' : '700'};
    line-height: normal;
    background-repeat: no-repeat;
    
`
export const BodyDiv = styled.div`
    background-color: #fafafa;
    width: 100%;
    
`
export const NavBoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    margin-bottom: 30px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; 
`
export const MotorNavIn = styled.input`
    height: 36px;
    flex-shrink: 0;    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.60);
    width: 91px;
`

export const DisNavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    width: 60%;
    margin: 15px;
    align-items: center;
    font-family: Montserrat;
    
`
export const DisNavMenu2 = styled.div`
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
    width: 100%;
    margin: 15px;
    align-items: center;
    font-family: Montserrat;
    margin-right: 110px;

`

export const SelectBox = styled.select`   
    border: none;
    padding: 10px 10px 10px 0;
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
    width: 240px;
    background-color: #fafafa;
    border-bottom: 1px solid #B5B0A1;
`
export const NavButton = styled.button`
    color: #FFF;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 60px;
    border: none;
    padding: 10px 20px;
    background: ${(props)=>props.$search ? '#006DAB' : '#FF7A00'} ;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    margin-bottom: 50px;
`
export const CompareDiv = styled.div`
    border-radius: 10px;
    background: ${(props)=>props.$first ? `url(${Compare1})` : (props)=>props.$second ? `url(${Compare2})`:(props)=>props.$third ? `url(${Compare3})`:''} ;
    background-repeat: no-repeat;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
    width: 75px;
    height: 90px;
    flex-shrink: 0;
    background-size: contain;
    background-position: center;

`
export const ComparingCar = styled.div`
    display: ${(props)=>props.$main ? 'grid': 'flex'};
    color: var(--blue, #006DAB);
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    gap: ${(props)=>props.$main ? '7px': ''};;
`

export const FilterButton = styled.div`
    :nth-child(1){
        display: none;
        @media (min-width: 1430px){
            display: none;
       }
        @media (max-width:1430px){
            display: inline-block;
        }
    }
    
    
`
export const MainBodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    
    
`
export const Heading = styled.div`
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: ${(props)=>props.$name ? '16px': (props)=>props.$brand ? '12px': (props)=>props.$price ? '22px': ''};
    font-style: normal;
    font-weight: ${(props)=>props.$name ? '600': (props)=>props.$brand ? '400': (props)=>props.$price ? '700': ''};
    color: ${(props)=>props.$price ? '#006DAB': ''};
    padding: 5px;
    line-height: normal;
    display: ${(props)=>props.$brand ? 'flex': ''};
    justify-content: ${(props)=>props.$brand ? 'space-between': ''};
    align-items: ${(props)=>props.$brand ? 'center': ''};
    text-decoration: none;
    :focus{
        text-decoration: none;
    }
`
export const Seperated = styled.div`
    img{
        width: 50%;
        height: auto;
        background-color: white;
        
        border-radius: 3%;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10)
    }
    background-color: #fafafa;
`

export const Backgrounds = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px;
        button{
            width: 20%;
            height: 50px;
            border: none;
            border-radius: 10px;
            background: rgba(202, 193, 193, 0.887);
            margin-top: -50px;
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
        }
`
export const MainSideBar = styled.div`
    @media(max-width: 1430px){
        display: none;
    }
`

export const CampingBox = styled.div`

    height: 250px;
    width: 300px;
    background-color: none;
    margin: 0;
    flex: 1;
    @media(max-width: 440px){
        width: 80%;
    }
    img{
        height: 200px;
        width: 300px;
        border-radius: 10px;
    }
`
export const CampingContainer = styled.div`
    display: grid;
    margin-inline: auto;
    grid-template-columns: repeat(3, 1fr);
    background-position: center;
    grid-gap: 30px;
    flex-shrink: 0;
    padding: 30px 0;
    transition: 0ms.9s;
    
    :hover{
        /* background: #f0f0f0; */
        transform: scale(1.02);
        transition: 0.5s ease;

    }
    @media(max-width: 1100px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-around;
        align-items: center;
    }
    @media(max-width: 440px){
        display: grid;
        grid-template-columns: 1fr;
        justify-content: space-around;
        align-items: center;
        width: 70%;}
`
export const CampingScrollingImg = styled.img`
    /* width: 200px; */
    /* height: 200px; */
`
export const CampingMainDiv = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
`

export const RegisterInputs = styled.input`
    height: 44px;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid gray;
`
export const RegisterButton = styled.input`
    height: 44px;
    box-sizing: border-box;
    background-color: #006DAB;
    text-align: center;
    border: none;
    color: white;
    font-family: sans-serif;
    border-radius: 5px;
`

export const LogInForm = styled.form`
    display: flex;
    flex-direction: column;
`
export const LogInInputs = styled.input`
    height: 44px;
    box-sizing: border-box;
    padding: 10px;
    margin: 10px 0 20px 0;
    border-radius: 5px;
    border: 1px solid black;
`