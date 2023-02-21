import { Box, Grid } from '@mui/material';
import PropViewer from './propViewer/PropViewer';

const ElementsContainer = () => (
  <Box
    // container
    // md={12}
    // item
    sx={{
      backgroundColor: 'brown',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Box
      sx={{
        flex: 0.3,
        backgroundColor: 'pink',
        display: 'flex',
        alignSelf: 'stretch',
      }}
    />
    <PropViewer />
  </Box>
);

export default ElementsContainer;
