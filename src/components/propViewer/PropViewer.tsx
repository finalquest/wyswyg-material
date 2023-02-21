import { useTreeContextProps } from '@/model/ComponentTreeContext';
import { Box } from '@mui/material';
import { JsonViewer, JsonViewerOnChange } from '@textea/json-viewer';
import { useCallback } from 'react';

const PropViewer = () => {
  const a = 1;
  const {
    getSelectedComponentProps,
    selectedComponent,
    updateComponentPropsByPath,
    updateComponentProps,
  } = useTreeContextProps();
  const obj = getSelectedComponentProps();
  console.log('PropViewer.tsx: PropViewer(): obj: ', obj);

  return (
    <Box sx={{ flex: 1, backgroundColor: 'white' }}>
      <JsonViewer
        key={selectedComponent}
        value={obj}
        editable
        onChange={(path, oldValue, newValue) => {
          const b = updateComponentPropsByPath(
            selectedComponent,
            path as string[],
            newValue
          );
          // updateComponentProps(selectedComponent, b);
        }}
      />
    </Box>
  );
};

export default PropViewer;
