import React, { useState } from 'react'
import styled from 'styled-components'
import BgImg from './assets/login.jpeg'

import { Backdrop, TextField } from '@mui/material';
import { LogInForm, LogInInputs, LongDash, SignBackground, SignContainer, SignInnerDiv, SignOr, SignTypography, SocialIcon, SocialIcons } from './style';
import { SLink } from './page/linkStyle';
import SizeCheckboxes from './materials/checkbox';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999999;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white;
    align-items: center;
`

const Bg = styled.div`
    background-image: url(${BgImg});
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`
const LoginSec = styled.div`
    width: 500px;
    margin-inline: auto;
    
`

const Heading = styled.h1`
    font-family: "Edu AU VIC WA NT Hand";
    font-size: 50px;
    color: #006DAB;
    margin-bottom: 30px;
`


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(email !== ''){try {
            const response = await fetch('http://localhost:5500/log-in',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
            });
            const data = await response.json()
            const access = data.token
           if(response.status === 201){
                alert(`Welcom ${data.name}`)
                navigate('/dashboard') 
                console.log('submiting')  
                setError('') 
                localStorage.setItem("token", access)
                console.log("consoling data.token",data.token)
            }else{
                setError('Incorrect email or password.');
                alert('Incorrect email or password.');
            }
        } catch (error) {
            console.error('login error cought', error)
            if (error.response && error.response.status === 400) {
                setError('Incorrect email or password.');
                alert('Incorrect email or password.');
              } else {
                setError('An error occurred. Please try again.');
                alert('An error occurred. Please try again.');
              }
        }}
            

    }
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
        // console.log('email is clicked')
    }
    const handleChangePassword = (e) =>{
        setPassword(e.target.value)
        // console.log('password is clicked')

    }

  return (
    <Container>
        <Bg></Bg>
        <div>
            <LoginSec>
                <Heading> Welcome to Caravan</Heading>
                <h1 style={{marginBottom:'10px', color:'#006dab', textAlign:'center'}}>Login with email</h1>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button onClick={(e)=> {setEmail('camper@mail.ru'); setPassword('camper')}}>autofill</button>
                <LogInForm onSubmit={handleSubmit}>
                    <label>Your email</label>
                    <LogInInputs type="text" placeholder='example@gmail.com' onChange={handleChangeEmail} />
                    <label>Your password</label>
                    <LogInInputs type="password" placeholder='Your password' onChange={handleChangePassword}/>
               

                    <SignInnerDiv  style={{marginBottom:'10px'}}>
                    <SizeCheckboxes /><SignTypography>Keep me Logged in</SignTypography>
                        <SignTypography>Forgot your password?</SignTypography>
                    </SignInnerDiv>
                    <Button type='submit' sx={{width:'100%', height:'50px'}} variant="contained">SIGN IN</Button>
                 </LogInForm>
                <SignOr $or><LongDash></LongDash>  OR <LongDash></LongDash></SignOr>
                <SocialIcons >
                    <SocialIcon $n>N</SocialIcon>
                    <SocialIcon $g><svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                    <path d="M25.3743 11.8771C25.5158 12.6349 25.5928 13.4273 25.5928 14.2541C25.5928 20.7218 21.2642 25.3206 14.7265 25.3206C13.2397 25.3211 11.7674 25.0285 10.3937 24.4598C9.02006 23.891 7.77191 23.0572 6.7206 22.0059C5.6693 20.9546 4.83544 19.7064 4.26669 18.3327C3.69794 16.9591 3.40543 15.4868 3.40588 14C3.40543 12.5132 3.69794 11.0409 4.26669 9.66726C4.83544 8.29357 5.6693 7.04542 6.7206 5.99411C7.77191 4.94281 9.02006 4.10896 10.3937 3.5402C11.7674 2.97145 13.2397 2.67894 14.7265 2.6794C17.7832 2.6794 20.3373 3.8041 22.2969 5.6303L19.1057 8.82155V8.8135C17.9177 7.6819 16.4101 7.10115 14.7265 7.10115C10.9913 7.10115 7.95529 10.2567 7.95529 13.9931C7.95529 17.7283 10.9913 20.8908 14.7265 20.8908C18.1155 20.8908 20.4224 18.9531 20.8962 16.2919H14.7265V11.8771H25.3755H25.3743Z" fill="white"/>
                    </svg></SocialIcon>
                    <SocialIcon $naver><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M17 4.925C24.7803 4.925 31.0875 9.84087 31.0875 15.9065C31.0875 21.9709 24.7803 26.8867 17 26.8867C16.2253 26.8872 15.4513 26.8379 14.6829 26.7392L8.76885 30.6072C8.09667 30.9627 7.8592 30.9238 8.13558 30.0531L9.33235 25.1184C5.46835 23.1596 2.91248 19.7652 2.91248 15.9065C2.91248 9.84221 9.21965 4.925 17 4.925ZM24.9252 15.7388L26.8974 13.8283C27.0113 13.7101 27.0747 13.5524 27.0745 13.3883C27.0743 13.2242 27.0105 13.0666 26.8964 12.9487C26.7823 12.8308 26.6269 12.7618 26.4629 12.7562C26.2989 12.7506 26.1392 12.8088 26.0173 12.9187L23.4306 15.4222V13.3534C23.4306 13.1854 23.3639 13.0243 23.2451 12.9056C23.1263 12.7868 22.9653 12.7201 22.7973 12.7201C22.6294 12.7201 22.4683 12.7868 22.3495 12.9056C22.2308 13.0243 22.164 13.1854 22.164 13.3534V16.784C22.1403 16.8819 22.1403 16.984 22.164 17.0818V19.0125C22.164 19.1805 22.2308 19.3415 22.3495 19.4603C22.4683 19.5791 22.6294 19.6458 22.7973 19.6458C22.9653 19.6458 23.1263 19.5791 23.2451 19.4603C23.3639 19.3415 23.4306 19.1805 23.4306 19.0125V17.1838L24.0035 16.6297L25.9194 19.3573C25.9672 19.4254 26.028 19.4834 26.0982 19.528C26.1685 19.5726 26.2468 19.603 26.3288 19.6173C26.4108 19.6316 26.4948 19.6297 26.576 19.6115C26.6572 19.5934 26.7341 19.5594 26.8022 19.5116C26.8703 19.4638 26.9283 19.403 26.9729 19.3327C27.0175 19.2625 27.0478 19.1841 27.0622 19.1022C27.0765 19.0202 27.0745 18.9362 27.0564 18.855C27.0383 18.7737 27.0043 18.6969 26.9565 18.6288L24.9252 15.7375V15.7388ZM20.9566 18.3202H18.9977V13.3735C18.9902 13.2107 18.9203 13.0572 18.8025 12.9446C18.6847 12.8321 18.528 12.7694 18.3651 12.7694C18.2022 12.7694 18.0456 12.8321 17.9278 12.9446C17.8099 13.0572 17.74 13.2107 17.7325 13.3735V18.9535C17.7325 19.3023 18.0143 19.5867 18.3644 19.5867H20.9566C21.1245 19.5867 21.2856 19.52 21.4043 19.4013C21.5231 19.2825 21.5898 19.1214 21.5898 18.9535C21.5898 18.7855 21.5231 18.6244 21.4043 18.5057C21.2856 18.3869 21.1245 18.3202 20.9566 18.3202ZM13.0984 16.8551L14.0322 14.5649L14.8882 16.8551H13.0984ZM16.4834 17.5098L16.4861 17.4884C16.4858 17.3288 16.4249 17.1754 16.3157 17.059L14.9123 13.3024C14.8535 13.1234 14.7415 12.9665 14.5911 12.8529C14.4408 12.7393 14.2594 12.6742 14.0711 12.6664C13.8815 12.6656 13.696 12.7225 13.5395 12.8297C13.383 12.9368 13.2629 13.089 13.195 13.2661L10.9665 18.7334C10.9351 18.8104 10.9191 18.8929 10.9195 18.976C10.9199 19.0592 10.9367 19.1415 10.9689 19.2182C11.0011 19.2948 11.0481 19.3644 11.1072 19.423C11.1663 19.4815 11.2363 19.5278 11.3133 19.5592C11.3903 19.5907 11.4728 19.6067 11.5559 19.6063C11.6391 19.6058 11.7214 19.5891 11.798 19.5569C11.8747 19.5246 11.9443 19.4777 12.0028 19.4186C12.0614 19.3595 12.1077 19.2894 12.1391 19.2124L12.5819 18.1216H15.3591L15.7603 19.195C15.7875 19.2752 15.8306 19.3491 15.887 19.4124C15.9434 19.4757 16.0119 19.527 16.0884 19.5633C16.165 19.5996 16.2481 19.6202 16.3327 19.6238C16.4174 19.6275 16.5019 19.6141 16.5813 19.5844C16.6607 19.5548 16.7333 19.5095 16.7949 19.4513C16.8565 19.3931 16.9057 19.3231 16.9398 19.2455C16.9738 19.1679 16.9919 19.0843 16.9931 18.9995C16.9942 18.9148 16.9783 18.8307 16.9463 18.7522L16.4834 17.5098ZM12.0264 13.3802C12.0264 13.2125 11.9599 13.0516 11.8414 12.9329C11.7229 12.8142 11.5622 12.7473 11.3945 12.7469H7.04078C6.87283 12.7469 6.71176 12.8136 6.593 12.9324C6.47424 13.0512 6.40752 13.2122 6.40752 13.3802C6.40752 13.5481 6.47424 13.7092 6.593 13.828C6.71176 13.9467 6.87283 14.0135 7.04078 14.0135H8.59712V19.0259C8.59712 19.1939 8.66384 19.3549 8.7826 19.4737C8.90136 19.5925 9.06243 19.6592 9.23038 19.6592C9.39834 19.6592 9.55941 19.5925 9.67817 19.4737C9.79693 19.3549 9.86365 19.1939 9.86365 19.0259V14.0135H11.3932C11.5611 14.0135 11.7222 13.9467 11.8409 13.828C11.9597 13.7092 12.0264 13.5481 12.0264 13.3802Z" fill="black"/>
                    </svg></SocialIcon>
                </SocialIcons>
                <SLink to="/register"><Button   sx={{width:'100%', height:'50px', marginTop:'30px'}} variant="outlined">CREATE ACCOUNT</Button></SLink>
            </LoginSec>
        </div>
        
    </Container>
  )
}

export default Login