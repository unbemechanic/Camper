import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

//style
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
    align-items: center;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    padding: 20px;
    border-radius: 10px;
    color: var(--text-color, #023047);
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 31.2px */
    max-width: 500px;
    min-width: 300px;
    width: 30%;
    white-space: nowrap;
    form{
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        button{
        width: 100%;
        background-color: #006DAB;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 10px;
        &:hover{
            cursor: pointer;
        }
        &:active{
            opacity: 0.7;
        }
    }
        input{
            width: 100%;
        height: 50px;
        border: none;
        background: var(--text, #dae0e254);
        border-radius: 10px;
        color: black;
        padding-left: 15px;
        box-sizing: border-box;
        }
    }
`

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wweiofw', 'template_u9bb5qp', form.current, {
        publicKey: '-0GjtdOfIEC3lqdTB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Container>
        <h2>Send a question</h2>
      <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='Your name'/>
      <input type="email" name="user_email" placeholder='Your email'/>
      <input name="message" placeholder='Your question'/>
      <button type="submit" value="Send">Send your question</button>
    </form>
    </Container>
  );
};