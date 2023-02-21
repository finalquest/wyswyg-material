import { ComponentInterface } from '@/model/ComponentInterface';
import { Box, Grid } from '@mui/material';
import ElementComponent from './core/ElementComponent';

const BodyContainer = () => {
  console.log('BodyContainer.tsx: BodyContainer()');
  return (
    <Grid container md={12} item sx={{ backgroundColor: 'blue' }}>
      <ElementComponent id="component1" />
      {/* <ElementComponent {...componentProps} />
      <ElementComponent {...componentProps} />
      <ElementComponent {...componentProps} />
      <ElementComponent {...componentProps} /> */}
    </Grid>
  );
};

export default BodyContainer;
