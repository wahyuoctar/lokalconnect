import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import lokalconnect from '../../assets/images/Asset1.png';

const Nav = () => {
  return (
    <Box
      sx={{
        // backgroundColor: 'Primer.500',
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 10,
      }}
    >
      <Image style={{ margin: '20px' }} src={lokalconnect} />
    </Box>
  );
};

export default Nav;
