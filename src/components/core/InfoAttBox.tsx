import { CompomentAttributes } from '@/model/ComponentInterface';
import { Box } from '@mui/material';

const InfoAttBox = ({ x, y, width, height }: CompomentAttributes) => (
  <Box
    sx={{
      position: 'absolute',
      bottom: y,
      left: x,
      backgroundColor: 'black',
      flexDirection: 'row',
      display: 'flex',
    }}
  >
    <div>
      <div>{`X: ${x}`}</div>
      <div>{`Y: ${y}`}</div>
    </div>
    :
    <div>
      <div>{`W: ${width}`}</div>
      <div>{`H: ${height}`}</div>
    </div>
  </Box>
);

export default InfoAttBox;
