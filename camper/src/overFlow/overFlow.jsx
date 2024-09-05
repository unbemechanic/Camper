import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { campcar } from '../page/data/mockdata';
import {RemoveScroll} from 'react-remove-scroll';
import '..//overFlow/style.css';

//import useRef
import { useRef, useEffect } from 'react';

// style
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1300px;
    /* background-color: red; */
    margin-inline: auto;
    padding-top: 30px;
    h1{
        border-bottom: 2px solid #FF7A00;
        padding-inline: 5px;

    }
    //delete
    background-color: lime;
    position: relative;
`
const ImgContainer = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    margin-bottom: 50px;
    height: 500px;
    pointer-events: none;
    position: sticky;
    left: 0;
    top: 100px;
    position: absolute;
    left: 7%;
    top: 12%;;
    p{
        padding: 15px 40px;
        background-color: #cac4c4a7;
        border-radius: 10px;
    }
    img{
        height: 91%;
        width: 100%;
        object-fit: cover;
    }
`
const Wraper = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    grid-gap: 35px;
`
const DesWraper = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 600px;
    scrollbar-gutter: stable;
    /* overflow-y: scroll; */
    padding-bottom: 10px;
    margin-bottom: 200px;
    padding-left: 700px;
    background-color: red;
    h2, h3, h5, p, button, legend{
        font-style: normal;
        line-height: normal;
        font-family: Montserrat;
        
    }
    h2, h3, h5, p, button, legend{
        font-style: normal;
        line-height: normal;
        
    }
    h2{
        margin: 20px 0;
        color: var(--text, #373737);
        font-size: 30px;
        font-weight: 600;
    }
    h3{
        color: var(--blue, #006DAB);
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    h5{
        color: #373737;
        font-size: 17px;
        font-weight: 500;
    }
    p{
        color: rgba(55, 55, 55, 0.70);
        font-size: 15px;
        font-weight: 500;
    }
    button{
        border-radius: 10px;
        background: var(--blue, #006DAB);

        /* btn sh */
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
        padding: 15px 30px;
        color: #FFF;
        font-size: 20px;
        font-weight: 700;
        border: none;
        margin: 80px 0 20px 0;
    }
    legend{
        color: rgba(55, 55, 55, 0.80);
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 600;
        margin: 10px 0;
    }
    input{
        border-radius: 10px;
        background: rgba(55, 55, 55, 0.10);
        border: none;
        padding: 10px;
    }
`



export const OverFlow = () => {
    const data = campcar.maindata;
    const cartData = data.filter((value)=> value.id == 1)
   return (
    <Container>
        <h1>Cart</h1>
        {cartData.map((value)=>{
            return(
                <Wraper key={value.id}>
                    <ImgContainer>
                    <img src={value.car.photo}/>
                    <p>Purchase price: <b>{value.car.cost} W</b></p>
                    </ImgContainer>
                    <RemoveScroll>
                    <DesWraper className='scrollable'>
                        
                        <h2>{value.car.name}</h2>
                        <h3>{value.car.cost}</h3>
                        <h5>Description</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos voluptas sit delectus illum cumque cupiditate, explicabo pariatur aut consequuntur laborum ad esse eius assumenda tenetur similique placeat, corporis architecto recusandae.</p>
                        <button>Continue to payment</button>
                        <h2>Enter Account Details</h2>
                        <legend>First name</legend>
                        <input type="text" placeholder='First name' />
                        <legend>Last Name</legend>
                        <input type="text" placeholder='Last Name' />
                        <legend>Email</legend>
                        <input type="email" placeholder='Your email' />
                        <legend>Phone Number</legend>
                        <input type="number" placeholder='Phone Number' />
                        <h2>Card</h2>
                        <legend>Name on card</legend>
                        <input type="text" placeholder='Name on card' />
                        <legend>Card Number</legend>
                        <input type="number" placeholder='Card Number' />
                        <legend>Expiration Mounth</legend>
                        <input type="number" placeholder='01' />
                        <legend>Expiration Year</legend>
                        <input type="number" placeholder='2022' />
                        <legend>CVV</legend>
                        <input type="number" placeholder='CVV' />
                        <legend>Zip-code</legend>
                        <input type="number" placeholder='Zip-code' />
                        <button>Place Order</button>
                        
                    </DesWraper>
                    </RemoveScroll>
                    <div>

                    </div>
                </Wraper>
            )
        })}
    </Container>
  )
}
export default OverFlow