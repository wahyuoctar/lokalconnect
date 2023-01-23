import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
const News = ({ gambar, title, date }) => {
  return (
    <Grid
      style={{
        minWidth: 'sm',
        width: '100%',
        height: '300px',
        position: 'relative',
        margin: '20px',
      }}
    >
      <Typography
        style={{
          top: '30px',
          right: '0',
          fontSize: '18px',
          position: 'absolute',
        }}
      >
        {date}
      </Typography>
      <Image
        style={{
          width: '100%',
          height: '100%',
          marginRight: '20px',
          marginLeft: '20px',
        }}
        src={gambar}
        alt="photo"
      />
      <Typography
        style={{
          bottom: '10px',
          left: '30px',
          fontSize: '18px',
          position: 'absolute',
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
};
export default News;
