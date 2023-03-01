import Image from 'next/image';
// import lokalconnect from '../../assets/images/Asset 1@10x.png';
import lokalconnect from '../../public/images/Asset 1@10x.png';
import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Box
        width="100%"
        height="auto"
        backgroundColor="black"
        position="fixed"
        bottom={0}
        zIndex={10}
      >
        <Box height="50px" backgroundColor="black" width="100%"></Box>
        <Image
          style={{
            width: '120px',
            height: '40px',
            position: 'fixed',
            bottom: '30px',
            right: '16px',
          }}
          src={lokalconnect}
          alt="footer"
        />
        <Box height="50px" width="100%" backgroundColor="white"></Box>
      </Box>
    </>
  );
};

export default Footer;
