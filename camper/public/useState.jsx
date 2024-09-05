import React, { useState } from 'react'
import GridMenuComponent from '../src/gridMenu';
import VerticalMenuComponent from './verticalMenu';
import { BodyIcons, BoxingCars, FilterMenu, InfoNav, InfoNavInner, MainBodyDiv, SelectSec, SelectSecMin, VerticalBoxingCars } from '../../style';
import SwipeableTemporaryDrawer2 from '../../materials/sidebarMenu';
import { campcar } from '../../page/data/mockdata';

const UseStateComponent = () => {
    const [active, setActive] = useState(true);
    const horizontalMenuHandle = ()=> {
        setActive(true)
    }
    const verticalMenuHangle = ()=> {
        setActive(false)
    }
    const data = campcar.maindata;

  return (
    <div>
      <InfoNav>
                        <div  style={{display:'flex', alignItems:'center'}}>
                        <div className='horizontalNav'>Item <div className='horizontalNav'>{data.length}</div> </div><FilterMenu><SwipeableTemporaryDrawer2 /></FilterMenu>
                        </div>

                        <InfoNavInner>
                                <div >
                                <b className='horizontalNav'>Sort by</b>
                                <SelectSec>
                                    <div style={{height:'40px'}}>
                                    <input style={{height:'100%'}} />
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                    </div>
                                    <SelectSecMin>
                                    <input style={{height:'100%'}} type='number' placeholder='60'/>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                    </SelectSecMin>
                                </SelectSec>
                                </div>
                                
                                <BodyIcons>
                                    <div>
                                        <svg onClick={horizontalMenuHandle} style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18 18" fill="none">
                                        <path d="M7 2H3C2.44772 2 2 2.44772 2 3V7C2 7.55229 2.44772 8 3 8H7C7.55229 8 8 7.55229 8 7V3C8 2.44772 7.55229 2 7 2Z" fill="#373737"/>
                                        <path d="M14.895 2H10.895C10.3427 2 9.89502 2.44772 9.89502 3V7C9.89502 7.55229 10.3427 8 10.895 8H14.895C15.4473 8 15.895 7.55229 15.895 7V3C15.895 2.44772 15.4473 2 14.895 2Z" fill="#373737"/>
                                        <path d="M7 9.8H3C2.44772 9.8 2 10.2477 2 10.8V14.8C2 15.3523 2.44772 15.8 3 15.8H7C7.55229 15.8 8 15.3523 8 14.8V10.8C8 10.2477 7.55229 9.8 7 9.8Z" fill="#373737"/>
                                        <path d="M14.895 9.8H10.895C10.3427 9.8 9.89502 10.2477 9.89502 10.8V14.8C9.89502 15.3523 10.3427 15.8 10.895 15.8H14.895C15.4473 15.8 15.895 15.3523 15.895 14.8V10.8C15.895 10.2477 15.4473 9.8 14.895 9.8Z" fill="#373737"/>
                                        </svg>
                                    </div>
                                    <div className='breaker'></div>
                                    <div>
                                        <svg onClick={verticalMenuHangle} style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 22 22" fill="none">
                                        <path d="M3.66667 12.8333H5.5C6.00417 12.8333 6.41667 12.4208 6.41667 11.9167V10.0833C6.41667 9.57917 6.00417 9.16667 5.5 9.16667H3.66667C3.1625 9.16667 2.75 9.57917 2.75 10.0833V11.9167C2.75 12.4208 3.1625 12.8333 3.66667 12.8333ZM3.66667 17.4167H5.5C6.00417 17.4167 6.41667 17.0042 6.41667 16.5V14.6667C6.41667 14.1625 6.00417 13.75 5.5 13.75H3.66667C3.1625 13.75 2.75 14.1625 2.75 14.6667V16.5C2.75 17.0042 3.1625 17.4167 3.66667 17.4167ZM3.66667 8.25H5.5C6.00417 8.25 6.41667 7.8375 6.41667 7.33333V5.5C6.41667 4.99583 6.00417 4.58333 5.5 4.58333H3.66667C3.1625 4.58333 2.75 4.99583 2.75 5.5V7.33333C2.75 7.8375 3.1625 8.25 3.66667 8.25ZM8.25 12.8333H18.3333C18.8375 12.8333 19.25 12.4208 19.25 11.9167V10.0833C19.25 9.57917 18.8375 9.16667 18.3333 9.16667H8.25C7.74583 9.16667 7.33333 9.57917 7.33333 10.0833V11.9167C7.33333 12.4208 7.74583 12.8333 8.25 12.8333ZM8.25 17.4167H18.3333C18.8375 17.4167 19.25 17.0042 19.25 16.5V14.6667C19.25 14.1625 18.8375 13.75 18.3333 13.75H8.25C7.74583 13.75 7.33333 14.1625 7.33333 14.6667V16.5C7.33333 17.0042 7.74583 17.4167 8.25 17.4167ZM7.33333 5.5V7.33333C7.33333 7.8375 7.74583 8.25 8.25 8.25H18.3333C18.8375 8.25 19.25 7.8375 19.25 7.33333V5.5C19.25 4.99583 18.8375 4.58333 18.3333 4.58333H8.25C7.74583 4.58333 7.33333 4.99583 7.33333 5.5Z" fill="#373737" fill-opacity="0.4"/>
                                        </svg>
                                    </div>
                                </BodyIcons>

                        </InfoNavInner>
                    </InfoNav>
        {active ? <GridMenuComponent/> : <VerticalMenuComponent/>}
    </div>
  )
}

export default UseStateComponent