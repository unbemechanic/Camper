import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';

import { CompareDiv, ComparingCar, FilterMenuButton, NavButton } from '../style';
import AccordionExpandDefault from './arcadion';

export default function SwipeableTemporaryDrawer2() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 350, marginInline: 5}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {<AccordionExpandDefault></AccordionExpandDefault>}
        {<div style={{display:'flex', gap:'20px', justifyContent:'space-around'}}>
                        <NavButton>Cancel</NavButton>
                        <NavButton $search>Search</NavButton>
                    </div>}
                    {
                        <ComparingCar $main>
                        <div>Compare</div>
                        <ComparingCar>
                            <CompareDiv $first></CompareDiv>
                            <CompareDiv $second></CompareDiv>
                            <CompareDiv $third></CompareDiv>
                        </ComparingCar>
                    </ComparingCar>
                    }
      </List>
      
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <FilterMenuButton style={{display:'flex' }} onClick={toggleDrawer(anchor, true)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></FilterMenuButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
