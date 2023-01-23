import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import lokalconnect from '../../assets/images/Asset 1@10x.png';

const Footer = () => {
  return (
    <>
      <Box width="100%" position="fixed" bottom={0} zIndex={10}>
        <Box height="50px" width="100%" bgcolor="black"></Box>
        <Image
          style={{
            margin: '20px',
            width: '120px',
            height: '40px',
            position: 'absolute',
            bottom: '8px',
            right: '16px',
          }}
          src={lokalconnect}
        />
        <Box height="40px" width="100%" bgcolor="white"></Box>
      </Box>
    </>
  );
};

export default Footer;
