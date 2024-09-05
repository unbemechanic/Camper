import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
// import 

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SizeCheckboxes() {
  return (
    <div>
      
      <Checkbox  {...label
        
      }
      />
    </div>
  );
}
