import styled from "styled-components";

export const HorizontalFilter = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(55, 55, 55, 0.403);
    padding-bottom: 15px;
    /* background-color: yellow; */
    position: relative;
    width: 1050px;
    div{
        display: flex;
        align-items: center;
        gap: 10px;

        input{
            padding: 10px;
            border: none;
            background-color: inherit;
            width: 100%;
            /* border-right: 1px solid black; */
        }
    }
    @media (max-width: 1100px){
        width: 100%;
    }
    @media (max-width: 1100px){ 
        display: grid;
        /* width: 700px; */
        grid-template-columns: 30% 70%;
        align-items: flex-start;
        margin-inline: auto;

    }
    @media (max-width: 800px){
        width: 100%;
        align-items: flex-start;

    }
    @media (max-width: 480px){
        display: grid;
        width: 80%;
        align-items: flex-start;
        margin-inline: 0;
    }
`
export const VerticalFilterInput = styled.div`
    border: 1px solid gray;
    /* position: absolute;
    background-color: red;
    bottom: 10px ;
    right: 0; */
    border-radius: 5px;
    margin-right: ${(props)=>props.$inputs ? '20px' :''};
    @media (max-width: 1100px){
        margin-right: 0px;
    }
`