import { Inter } from '@next/font/google';
import { Box, Grid } from '@mui/material';
import BodyContainer from '@/components/BodyContainer';

const inter = Inter({ subsets: ['latin'] });

const Home = () => (
  <Grid
    container
    sx={{ width: '100wh', height: '100vh', backgroundColor: 'red' }}
  >
    <Grid item sx={{ backgroundColor: 'pink', flex: 1, display: 'flex' }}>
      <BodyContainer />
    </Grid>
    <Grid item sx={{ backgroundColor: 'brown', flex: 0.2 }}>
      <Box />
    </Grid>
  </Grid>
);

export default Home;
