import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { campcar } from '../page/data/mockdata';
import { useParams } from 'react-router-dom';
import { ContactImg, ContactWrapper, InputA, Length, QWrapper, Qustion, QustionContainer, TabContent, TabImages, Wrapper } from '../page/motor/documentStyle.';
import { Accordion, AccordionDetails, AccordionSummary, Button, Input, Typography } from '@mui/material';
import { ExpandCircleDownOutlined, ExpandMore } from '@mui/icons-material';
import { ContactUs } from '../email/email';
import { ContactMaping } from '../maping';

export default function UnstyledTabsIntroduction() {
    const { id } = useParams();
    const CarList = campcar.maindata.slice(0, 7)
    console.log(CarList)

  return (
    <Tabs defaultValue={0}>
      <TabsList sx={{}}>
        <Tab value={0}>Item reviews</Tab>
        <Tab value={1}>Q&A</Tab>
        <Tab value={2}>FAQs</Tab>
        <Tab value={3}>Contact</Tab>
      </TabsList>
      <TabPanel value={0}>
        <TabContent $review>
            <div>Premium reviews</div> <Length>{CarList.length}</Length>
            <select>
                <option >Best</option>
                <option>Good</option>
                <option>Worst</option>
            </select>
        </TabContent>
        <div>
            {CarList.map((value)=> {
                return <TabContent  key={value.id}>
                    <TabImages style={{width:'10%', height:'80%'}} src={value.car.photo} alt={value.name} />
                    <div>
                    <h2>{value.car.name}</h2>
                    <h4>{value.car.company}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum est maxime placeat? </p>
                    </div>
                    <div>
                        <p>ID: {value.id}</p>
                        <p>Data: {value.car.date}</p>
                        <p>Viewed: 135</p>
                    </div>
                    
                </TabContent>
            })}
        </div>
      </TabPanel>
      <TabPanel value={1}>
        <QWrapper>
            <div>
                <QustionContainer>
                    <div $name>Name</div>
                    <div>Question Lorem ipsum dolor sit amet consectetur adipisicing elit?</div>
                </QustionContainer>
                <QustionContainer>
                    <div>Name</div>
                    <div>Question Lorem ipsum dolor sit amet consectetur adipisicing elit?</div>
                </QustionContainer>
                <QustionContainer>
                    <div>Name</div>
                    <div>Question Lorem ipsum dolor sit amet consectetur adipisicing elit?</div>
                </QustionContainer>
                <QustionContainer>
                    <div>Name</div>
                    <div>Question Lorem ipsum dolor sit amet consectetur adipisicing elit?</div>
                </QustionContainer>
                <QustionContainer>
                    <div>Name</div>
                    <div>Question Lorem ipsum dolor sit amet consectetur adipisicing elit?</div>
                </QustionContainer>
            </div>
            <ContactUs/>
        </QWrapper>
        
        
      </TabPanel>
      <TabPanel value={2}>
        <QWrapper>
            <div>
                <Accordion sx={{marginBottom:'20px',boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)'}}>
                <AccordionSummary sx={{borderRadius:'110px'}}
                expandIcon={<ExpandMore/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography ><b>Frequently asked questions</b></Typography>
                </AccordionSummary>
                <AccordionDetails >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum quia esse doloribus fugit similique illo maiores exercitationem eos consectetur delectus alias voluptas distinctio, cum reiciendis debitis corporis, magnam beatae.
                </AccordionDetails>
                </Accordion>
                <Accordion sx={{marginBottom:'20px',boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)'}}>
                <AccordionSummary 
                expandIcon={<ExpandMore/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography><b>Frequently asked questions</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum quia esse doloribus fugit similique illo maiores exercitationem eos consectetur delectus alias voluptas distinctio, cum reiciendis debitis corporis, magnam beatae.
                </AccordionDetails>
                </Accordion>
                <Accordion sx={{marginBottom:'20px',boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)'}}>
                <AccordionSummary  
                expandIcon={<ExpandMore/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography><b>Frequently asked questions</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum quia esse doloribus fugit similique illo maiores exercitationem eos consectetur delectus alias voluptas distinctio, cum reiciendis debitis corporis, magnam beatae.
                </AccordionDetails>
                </Accordion>
                <Accordion sx={{marginBottom:'20px',boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)'}}>
                <AccordionSummary 
                expandIcon={<ExpandMore/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography><b>Frequently asked questions</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum quia esse doloribus fugit similique illo maiores exercitationem eos consectetur delectus alias voluptas distinctio, cum reiciendis debitis corporis, magnam beatae.
                </AccordionDetails>
                </Accordion>
                <Accordion sx={{marginBottom:'20px',boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)'}}>
                <AccordionSummary 
                expandIcon={<ExpandMore/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography><b>Frequently asked questions</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum quia esse doloribus fugit similique illo maiores exercitationem eos consectetur delectus alias voluptas distinctio, cum reiciendis debitis corporis, magnam beatae.
                </AccordionDetails>
                </Accordion>
                <Accordion sx={{marginBottom:'20px',boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)'}}>
                <AccordionSummary 
                expandIcon={<ExpandMore/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography><b>Frequently asked questions</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum quia esse doloribus fugit similique illo maiores exercitationem eos consectetur delectus alias voluptas distinctio, cum reiciendis debitis corporis, magnam beatae.
                </AccordionDetails>
                </Accordion>
                <Accordion sx={{marginBottom:'20px',boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)'}}>
                <AccordionSummary 
                expandIcon={<ExpandMore/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography><b>Frequently asked questions</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum quia esse doloribus fugit similique illo maiores exercitationem eos consectetur delectus alias voluptas distinctio, cum reiciendis debitis corporis, magnam beatae.
                </AccordionDetails>
                </Accordion>
            </div>
            <ContactUs/>
            
        </QWrapper>
      </TabPanel>
      <TabPanel value={3}>
        <ContactWrapper>
            <div>
                <ContactMaping/>
                <Wrapper>
                    <div>
                        Phone number: <br/> +7 234 567 112<br/>+7 123 432 756
                    </div>
                    <div>E-mail: <br/> logo.uz</div>
                </Wrapper>
            </div>
            <ContactUs/>
        </ContactWrapper>
      </TabPanel>
    </Tabs>
  );
}


const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
/*   50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7', */
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Tab = styled(BaseTab)`
  font-family: Montserrat;
  color: #373737;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 10%;
  padding: 10px 12px;
  /* margin: 6px; */
  border: none;
  height: 100%;
  display: flex;
  justify-content: center;
  min-width: fit-content;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: none;
    
  }

  &.${tabClasses.selected} {
    background-color: #006DAB;
    color: white;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 95vw;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: inherit;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  margin-inline: auto;
  opacity: 1;
  `,
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  margin-top: 50px;
  
  min-width: fit-content;
  background-color: rgba(0, 109, 171, 0.20);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 80px;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  white-space: nowrap;
  flex-shrink: 1;
  // column-gap: 20px;
  @media (max-width: 400px){
    padding-left: 40px;
  }
  `,
  
);
