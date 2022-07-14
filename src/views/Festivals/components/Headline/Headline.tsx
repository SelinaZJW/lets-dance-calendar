import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Headline = (): JSX.Element => {
  return (
    <Box
      display={'flex'}
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent={'space-between'}
      alignItems={{ xs: 'flex-start', sm: 'center' }}
    >
      <Typography marginLeft={{ xs: 0, sm: 5 }} marginBottom={{ xs: 1, sm: 0 }} variant={'h5'} fontWeight={700} >
        Festivals
      </Typography>

      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="primary" href="/home">
          Home
        </Link>
        <Typography color="text.primary">Festivals</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Headline;
