
import { ComponentProps } from '@/model/ComponentInterface';
import { useTreeContextProps } from '@/model/ComponentTreeContext';
import { Box, Button } from '@mui/material';

const availableComponents = [
  {
    name: "Grid",
    defaultProps: {
      sx: {
        flex: 0.5,
        backgroundColor: 'pink',
        borderColor: 'black',
        border: 1,
        display: 'flex',
        flexDirection: 'column',
      }
    }
  }
]

const AvailableElementsContainer = () => {
  const { addChild } = useTreeContextProps(); 
  
  const handleAddChild = (component) => {
    const newComponent: ComponentProps = {
      type: component.name,
      props: component.defaultProps,
      childs: [],
    }
    addChild(newComponent, `${component.name}-${Date.now().toString()}`);
  }
  return (
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
        <Button variant='contained' sx={{height: 45}} onClick={() => {handleAddChild(component)}}>{component.name}</Button>
      ))}
    </Box>
  )
}

export default AvailableElementsContainer;
