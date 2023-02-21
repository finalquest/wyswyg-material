import { Box, Grid } from '@mui/material';
import BodyContainer from '@/components/BodyContainer';
import ElementsContainer from '@/components/ElementsContainer';
import {
  ComponentTreeProvider,
  InternalComponentProps,
} from '@/model/ComponentTreeContext';

const props: InternalComponentProps = {
  component1: {
    type: Box,
    props: {
      sx: {
        flex: 1,
        backgroundColor: 'green',
        borderColor: 'black',
        border: 1,
        display: 'flex',
        flexDirection: 'column',
      },
      parent: this,
    },
  },
};

const Home = () => (
  <Grid
    container
    sx={{ width: '100wh', height: '100vh', backgroundColor: 'red' }}
  >
    <ComponentTreeProvider componentProps={props}>
      <Grid item sx={{ backgroundColor: 'pink', flex: 1, display: 'flex' }}>
        <BodyContainer />
      </Grid>
      <Grid item sx={{ backgroundColor: 'brown', flex: 0.2 }}>
        <ElementsContainer />
      </Grid>
    </ComponentTreeProvider>
  </Grid>
);

export default Home;
