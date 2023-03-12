
import { Box, Button } from '@mui/material';

const availableComponents = [
  {
    name: "Grid",
    onClick: () => console.log("Grid"),
  }
]

const AvailableElementsContainer = () => (
  <Box
    sx={{
      backgroundColor: 'brown',
      flex: 1,
      gap:2,
      overflowY: 'scroll',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    }}
  >
    {availableComponents.map((component) => (
      <Button variant='contained' sx={{height: 45}} onClick={component.onClick}>{component.name}</Button>
    ))}
  </Box>
);

export default AvailableElementsContainer;
