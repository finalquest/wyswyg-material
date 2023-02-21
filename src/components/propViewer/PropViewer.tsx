import { useTreeContextProps } from '@/model/ComponentTreeContext';
import { Box } from '@mui/material';
import { JsonViewer } from '@textea/json-viewer';

const PropViewer = () => {
  const {
    getSelectedComponentProps,
    selectedComponent,
    updateComponentPropsByPath,
  } = useTreeContextProps();
  const obj = getSelectedComponentProps();

  return (
    <Box sx={{ flex: 1, backgroundColor: 'white' }}>
      <JsonViewer
        key={selectedComponent}
        value={obj}
        editable
        onChange={(path, oldValue, newValue) => {
          updateComponentPropsByPath(
            selectedComponent,
            path as string[],
            newValue
          );
        }}
      />
    </Box>
  );
};

export default PropViewer;
