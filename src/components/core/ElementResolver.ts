import { Box, Grid } from '@mui/material';

const getElementByType = (type: string): any => {
  switch (type) {
    case 'Grid':
      return Grid;
    case 'Box':
      return Box;
    default:
      return Box;
  }
};

export default getElementByType;
