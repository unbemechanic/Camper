import styled from "styled-components";

export const AddDataButton = styled.button`
    color: white;
    background-color: #1d2c49;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    white-space: nowrap;
`

export const ModalImg = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid rgba(201, 201, 201, 0.625);
    box-sizing: border-box;
    position: relative;
    border-radius: 10px;
    margin-bottom: 15px;
    div{
        background-color: white;
        height: 100%;
        position: absolute;
        width: 100%;
        top: 0;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 12px;
        font-family: Montserrat;
        font-weight: 500;
        padding: 10px;
        box-sizing: border-box;
        flex-direction: column;
        border-radius: 10px;

    }
    input{
    border-radius: 10px;

    }
`

export const ModalInputs = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
    border: 1px solid rgba(201, 201, 201, 0.625);
    border-radius: 5px;
    padding: 10px;
    box-sizing: ${(props)=>props.$submit ? 'content-box':'border-box'} ;
    background-color: ${(props)=>props.$submit ? '#006DAB':''};
    border: ${(props)=>props.$submit ? 'none':''};
    color: ${(props)=>props.$submit ? 'white':''};
    padding: ${(props)=>props.$submit ? '10px 0':''};
    cursor: ${(props)=>props.$submit ? 'pointer':''};
`

export const EditButtonDiv = styled.div`
    background-color: #1d2c49;
    border: none;
    border-radius: 5px;
    padding: 3px 10px;
    cursor: pointer;
`
export const DeleteButtonDiv = styled.div`
    background-color: #ff4400;
    border: none;
    border-radius: 5px;
    padding: 3px 10px;
    cursor: pointer;
`


export const Container = styled.div`
    display: flex;
    height: 100vh;
    position: fixed;
    background-color: #f0f0f0;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    gap: 0px;
    
`
export const Tabs = styled.div`
    width: 250px;
    background-color: #1d2c49;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    color: white;
    font-family: Montserrat;
    font-weight: 600;
    line-height: normal;
    position: relative;
    transition: all .5s ease-in-out;
`
export const Buttons = styled.button`
    cursor: pointer;
    background-color: inherit;
    color: #ffffff;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-radius: 10px 10px 10px 10px;
    transition: all .5s ease;
    position: relative;
    z-index: 12;
    border: none;
    font-family: Montserrat;
    font-weight: 700;
    gap: 10px;
    &::after{
        content: " ";
        position: absolute;
        width: 100%;
        height: 100%;
        margin-left: -20px;
        transform: scaleX(0);
        background-color: #2f3d59;
        border-radius: 10px 10px 10px 10px;
        transition: transform 0.3s ease-in-out;
        transform-origin: right;
        z-index: -2;
    }
    
    &:active::after{
        transform: scaleX(1);
        /* color: #EFEEF8; */

    }
    &:focus::after{
        transform: scaleX(1);
        color: #EFEEF8;

    }
    &:-moz-suppressed{
        transform: scaleX(1);
        color: #EFEEF8; 
    }

`
export const Logout = styled.button`
    cursor: pointer;
    height: 44px;
    width: 150px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-radius: 10px;
    position: fixed;
    bottom: 20px;
    gap: 10px;
    border: none;
    background-color: inherit;
    color: white;
    font-family: Montserrat;
    font-weight: 500;
    transition: 0.5s ease-in-out;
    white-space: nowrap;
    &:hover{
        background-color: red;
        width: 160px;
    }
`
export const ProfileLogo = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`
export const Content = styled.div`
    padding: 0 0 0 20px;
    width: 95%;
    /* background-color: red; */
    position: relative;
`
export const Controller = styled.div`
    display: flex;
    justify-content: end;
    gap: 50px;
    align-items: center;
    margin-right: 20px;
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 80px;
    width: 100%;
    padding-right: 50px;
`
export const InputsDiv = styled.div`
    display: flex;
    align-items: center;
    /* background-color: lime; */
    height: 34px;
    width: 300px;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid gray;
    border-radius: 5px;
    margin-right: 10px;
    /* box-shadow: 0.5px 1px 2px 0px rgba(0, 0, 0, 0.5); */
    
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border-radius: 74px;
    padding: 0 10px 0 0;
    margin-right: 30px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow:  31px 31px 63px #e0e0e0,
                -31px -31px 63px #ffffff;
`
export const Input = styled.input`
    outline: none;
    width: 100%;
    border: none;
    
`
export const DataControl = styled.div`
    display: grid;
    grid-template-columns: 6fr 2fr 1fr 1fr;
    margin-top: 10px;
`
export const DataList = styled.div`
    border-radius: 10px;
    /* border: 1px solid rgba(0, 0, 0, 0.2); */
    /* box-shadow: 0.5px 1px 2px 0px rgba(0, 0, 0, 0.5); */
    height: 95dvh;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 30px;
    background-color: white;
    /* margin-top: 120px; */
    margin-right: 20px;
`
export const TableHead = styled.th`
    background-color: lime;
    border-bottom: 1px solid gray;
`
export const Table = styled.table`
    width: 100%;
    margin-top: 10px;
    border-spacing: 0;
    border-collapse: collapse;
    height: 300px;
    overflow-y: scroll;
`
export const TableRow = styled.tr`
    border-bottom: 1px solid gray;
    display: grid;
    justify-content: space-between;
    grid-template-columns: ${(props)=> props.$camping ? "20px 90px 90px 70px 90px 120px 100px 100px 100px 100px " :(props)=> props.$campingTable ? "20px 90px 90px 70px 90px 45px 45px 100px 100px 100px 100px" :(props)=> props.$user ? '25px 200px 300px 200px' :'30px 90px 90px 100px 80px 90px 90px 70px 100px 70px 100px 100px'} ;
    cursor: pointer;
    align-items: center;
    padding-right: 80px;
    padding-left: 10px;
    
    th{
        padding: 10px;
        text-align: center;
    }
    td{
        padding: 10px;
        text-align: center;

    }
`
export const ScrollSec = styled.div`
    overflow-y: scroll;
    height: 95%;
    scrollbar-width: none;
    /* background-color: red; */
`
export const UpdateButton = styled.button`
    width: 100px;
    border-radius: 5px;
    padding: 3px 10px;
    background-color: lime;
    border: none;
    cursor: pointer;
`
export const UpdateInputs = styled.input`
    width: 80px;
    border: none;
    border-bottom: 1px solid gray;
    background-color: white;
`
export const FileInput = styled.input.attrs({ type: 'file' })`
  &::file-selector-button {
    background-color: white;
    color: black;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    }
    width: 80px;
    border-bottom: 1px solid gray;
`

export const Drawwer = styled.img`
    width: 20px;
    height: 20px;
    padding: 5px;
    border-radius: 3px;
    background: #1d2c49;
    position: absolute;
    right: -15px;
    z-index: 999999;
    top: 25px;
    transition: all .5s ease-in-out;
    cursor: pointer;
    /* transform: rotate(180deg); */
`
export const FilterButton = styled.div`
    background-color: #1d4249;
    border-radius: 5px;
    color: white;
    font-family: Montserrat;
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;
    justify-content: center;
    margin-right: 10px;
    white-space: nowrap;
    padding-inline: 10px;
`

export const ButtonIcons = styled.div`
    opacity: 1;
    visibility: visible;
    transition: opacity 1s ease-in-out, visibility 1s ease-in-out;

`