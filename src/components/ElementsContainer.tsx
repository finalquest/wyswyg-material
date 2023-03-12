import { Box } from '@mui/material';
import AvailableElementsContainer from './availableElements/AvailableElementsContainer';
import PropViewer from './propViewer/PropViewer';

const ElementsContainer = () => (
  <Box
    sx={{
      backgroundColor: 'brown',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <AvailableElementsContainer/>
    <PropViewer />
  </Box>
);

export default ElementsContainer;
