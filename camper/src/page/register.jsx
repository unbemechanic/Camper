import React, { useState } from 'react'
import { LongDash, RegisterBackground, RegisterButton, RegisterInputs, SignBackground, SignCheckboxDiv, SignContainer, SignIconsBlur, SignInnerDiv, SignOr, SignTypography, SocialIcon, SocialIcons } from '../style'
import SizeCheckboxes from '../materials/checkbox'
import { Button, TextField } from '@mui/material'
import { SLink } from './linkStyle'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegisterComponent = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(name !== ''){
          try {
            const response = await axios.post("http://localhost:5500/sign-up", {
                name, email, password 
            });
            console.log('submit is clicked',response.data)
            setName('')
            setEmail('')
            setPassword('')
            navigate('/')

        } catch (error) {
            console.error('failure', error)
        }  
        } 
    }
    const handleChange = (e) => {
        setName(e.target.value)
        console.log("name is clicked")
    }
    const handleChangePassword = (e) => {
        setEmail(e.target.value)
        console.log("name is clicked")
    }
    const handleChangeConformPassword = (e) => {
        setPassword(e.target.value)
        console.log("name is clicked")
    }

  return (
    <div>
        <RegisterBackground>
                    <SignContainer onSubmit={handleSubmit}>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <h2>Sign up</h2><div><SLink to='/'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></SLink></div>
                        </div>
                        
                       <label htmlFor="">Name</label>
                       <RegisterInputs type="text" placeholder='ex.Eric' value={name} onChange={handleChange} name='name' />
                       <label htmlFor="">Email</label>
                       <RegisterInputs type="text" placeholder='ex.eric@gmailcom'  onChange={handleChangePassword} name='Email' value={email}/>
                       <label htmlFor="">Password</label>
                       <RegisterInputs type="password" placeholder='Enter your password' value={password} onChange={handleChangeConformPassword} name='password' />

                        <SignInnerDiv>
                        <SizeCheckboxes /><SignTypography>Keep me Logged in</SignTypography>
                            <SignTypography></SignTypography>
                        </SignInnerDiv>
                        <RegisterButton type="submit" value='REGISTER' />
                    </SignContainer>
                </RegisterBackground>
    </div>
  )
}

export default RegisterComponent