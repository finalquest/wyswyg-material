import { Grid } from '@mui/material';
import ElementComponent from './core/ElementComponent';

const BodyContainer = () => (
  <Grid container md={12} item sx={{ backgroundColor: 'blue' }}>
    <ElementComponent id="component1" />
  </Grid>
);

export default BodyContainer;
