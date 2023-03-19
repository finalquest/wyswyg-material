import { Grid } from '@mui/material';
import BodyContainer from '@/components/BodyContainer';
import ElementsContainer from '@/components/ElementsContainer';
import {
  ComponentTreeProvider,
  InternalComponentProps,
} from '@/model/ComponentTreeContext';

const props: InternalComponentProps = {
  component1: {
    type: 'Box',
    props: {
      sx: {
        flex: 1,
        backgroundColor: 'blue',
        borderColor: 'black',
        border: 1,
        display: 'flex',
        flexDirection: 'column',
      },
      parent: this,
    },
    childs: [],
  },
  // component2: {
  //   type: 'Box',
  //   props: {
  //     sx: {
  //       flex: 1,
  //       backgroundColor: 'brown',
  //       borderColor: 'black',
  //       margin: 2,
  //       border: 1,
  //       display: 'flex',
  //       flexDirection: 'column',
  //     },
  //     parent: this,
  //   },
  // },
  // component3: {
  //   type: 'Box',
  //   props: {
  //     sx: {
  //       flex: 1,
  //       backgroundColor: 'blue',
  //       borderColor: 'black',
  //       margin: 2,
  //       border: 1,
  //       display: 'flex',
  //       flexDirection: 'column',
  //     },
  //     parent: this,
  //   },
  // },
  // component4: {
  //   type: 'Box',
  //   props: {
  //     sx: {
  //       flex: 1,
  //       backgroundColor: 'yellow',
  //       borderColor: 'black',
  //       margin: 2,
  //       border: 1,
  //       display: 'flex',
  //       flexDirection: 'column',
  //     },
  //     parent: this,
  //   },
  // },
  // component5: {
  //   type: 'Box',
  //   props: {
  //     sx: {
  //       flex: 1,
  //       backgroundColor: 'green',
  //       borderColor: 'black',
  //       margin: 2,
  //       border: 1,
  //       display: 'flex',
  //       flexDirection: 'column',
  //     },
  //     parent: this,
  //   },
  // },
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
      <Grid item sx={{ backgroundColor: 'brown', flex: 0.3, display: 'flex' }}>
        <ElementsContainer />
      </Grid>
    </ComponentTreeProvider>
  </Grid>
);

export default Home;
