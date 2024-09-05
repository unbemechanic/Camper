import React from 'react'
import { CartMultiCarouselComponent } from '../main.jsx/App'
import { Container, DesWraper, ImgContainer, Wraper } from './cart'
import { campcar } from '../data/mockdata'
import { useParams } from 'react-router-dom'
import CartImg from '..//../assets/img-11.webp'
import CartSlides from './slides'

const NavCart = () => {
  return (
    <div>
        <Container>
            <h1>Cart</h1>
            <Wraper>
            <CartSlides/>
                <DesWraper className='scrollable'>
                    <h2>Car Name<h3>Price</h3></h2>
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
    </Container>
    </div>
  )
}

export default NavCart