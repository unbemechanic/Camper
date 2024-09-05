import React from 'react'
import { campcar } from '../data/mockdata'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { caravan } from '../data/caravan';
import { tuning } from '../data/tuning';
import { usedCar } from '../data/usedCars';
import {RemoveScroll} from 'react-remove-scroll';


// style
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1300px;
    margin-inline: auto;
    margin-top: 35px;
    h1{
        border-bottom: 2px solid #FF7A00;
        padding-inline: 5px;

    }
`
export const ImgContainer = styled.div`
    width: 690px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    height: 500px;
    @media (max-width: 700px){
        width: 80%;
        margin-inline: auto;
        height: auto;
    }
    p{
        padding: 15px 40px;
        background-color: #cac4c4a7;
        border-radius: 10px;
        
    }
    img{
        height: 91%;
        width: 100%;
        @media (max-width: 700px){
        width: 100%;
        margin-inline: auto;
        object-fit: contain;
        height: auto;
    }
    }
`
export const Wraper = styled.div`
    display: flex;
    margin-top: 30px;
    grid-gap: 35px;
    @media (max-width: 1300px) {
        flex-direction: column;
    }
`
export const DesWraper = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 700px;
    overflow-y: scroll;
    margin-bottom: 50px;
    @media (max-width: 1300px){
        width: 700px;
        overflow-y: hidden;
        height: auto;
    }
    @media (max-width: 700px){
        width: 80%;
        margin-inline: auto;
    }
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
        @media (max-width: 1300px){
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        @media (max-width: 500px){
            font-size: 25px;
        }

    }
    h3{
        color: var(--blue, #006DAB);
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 20px;
        @media (max-width: 500px){
            font-size: 20px;
            margin: 0;
        }
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

const CartMotorComponent = () => {
    const data = campcar.maindata;
    let {id} = useParams();
    const cartData = data.filter((value)=> value.id == id)
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
                    <DesWraper className='scrollable'>
                        <h2>{value.car.name}<h3>{value.car.cost}</h3></h2>
                        
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
                    <div>
                    </div>
                </Wraper>
            )
        })}
    </Container>
  )
}

export default CartMotorComponent

export const CartCaravanComponent = () => {
    const data = caravan.maindata;
    let {id} = useParams();
    const cartData = data.filter((value)=> value.id == id)
   return (
    <Container>
        <h1>Cart</h1>
        {cartData.map((value)=>{
            return(
                <Wraper key={value.id}>
                    <ImgContainer>
                    <img src={value.caravan.image}/>
                    <p>Purchase price: <b>{value.caravan.price} W</b></p>
                    </ImgContainer>
                    <RemoveScroll>
                    <DesWraper className='scrollable'>
                        <h2>{value.caravan.name}</h2>
                        <h3>{value.caravan.price}</h3>
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
export const CartTuningComponent = () => {
    const data = tuning.maindata;
    let {id} = useParams();
    const cartData = data.filter((value)=> value.id == id)
   return (
    <Container>
        <h1>Cart</h1>
        {cartData.map((value)=>{
            return(
                <Wraper key={value.id}>
                    <ImgContainer>
                    <img src={value.tuning.image}/>
                    <p>Purchase price: <b>{value.tuning.price} W</b></p>
                    </ImgContainer>
                    <RemoveScroll>
                    <DesWraper className='scrollable'>
                        <h2>{value.tuning.name}</h2>
                        <h3>{value.tuning.price}</h3>
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
export const CartUsedCarComponent = () => {
    const data = usedCar.maindata;
    let {id} = useParams();
    const cartData = data.filter((value)=> value.id == id)
   return (
    <Container>
        <h1>Cart</h1>
        {cartData.map((value)=>{
            return(
                <Wraper key={value.id}>
                    <ImgContainer>
                    <img src={value.used.image}/>
                    <p>Purchase price: <b>{value.used.price} W</b></p>
                    </ImgContainer>
                    <RemoveScroll>
                    <DesWraper className='scrollable'>
                        <h2>{value.used.name}</h2>
                        <h3>{value.used.price}</h3>
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