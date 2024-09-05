import React from 'react'
import { DirectContainer, DirectH, Header, IndentedDiv, NavDisSec, NavDisSecLang } from '../../style'
import SwipeableTemporaryDrawer from '../../materials/navbarMenu'
import { Link } from 'react-router-dom'
import { SLink } from '../linkStyle'
import BasicModal from '../../materials/signModal'

// cart imports
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// cart style
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: -8,
      border: `2px solid #FF7A00`,
      padding: '0 4px',
      backgroundColor:'#FF7A00'
    },
}));
const CartIcon = styled(ShoppingCartIcon)`

  @media (max-width: 1300px){
    margin-left: 50px;
  }
`



// cart
function CustomizedCart() {
    return (
      <IconButton sx={{color:'#006DAB',width:'40px',boxSizing:'border-box'}} aria-label="cart">
          <CartIcon />
        <StyledBadge badgeContent={6} color="secondary">
        </StyledBadge>
      </IconButton>
    );
  }


const Navbar = () => {
  return (
    <div style={{
        backgroundColor: 'white', position:'sticky',top:'0', width:'100vw', zIndex:'999'
    }}>
        <IndentedDiv>
            <Header>
                <Link style={{textDecoration:'none'}} to='/main'><DirectH $name>Camper</DirectH></Link>
                <DirectContainer>
                    <SLink to="/motor"><DirectH>Motor<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></DirectH></SLink>
                    
                    <SLink to="/caravan"><DirectH>Caravan<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></DirectH></SLink>
                    <SLink to="/tuning"><DirectH>Tuning<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></DirectH></SLink>
                    <SLink to="usedCar"><DirectH>Used Car<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></DirectH></SLink>
                    <SLink to="/camping"><DirectH>Camping Place</DirectH></SLink>
                </DirectContainer>
                <SwipeableTemporaryDrawer/>
                <NavDisSecLang>
                    <Link to='/cart'><CustomizedCart/></Link>
                    <NavDisSec>
                    <BasicModal/>
                        <label for="lang">
                            <select id="lang" name='lang'>
                                <option value="English">En</option>
                                <option value="Russian">Ru</option>
                                <option value="Uzbek">Uzb</option>
                            </select>
                        </label>
                    </NavDisSec>
                </NavDisSecLang>
            </Header>
        </IndentedDiv>
    </div>
  )
}

export default Navbar