import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';

import ThemeModeToggler from 'components/ThemeModeToggler';

interface Props {
  colorInvert?: boolean;
}

const TopNav = ({ colorInvert = false }: Props): JSX.Element => {
  return (
    <Box display={{xs: 'none', md: 'flex'}} justifyContent={'flex-end'} alignItems={'center'}>
      <Box marginRight={{ xs: 2, sm: 4 }}>
        <Link
          underline="none"
          component="a"
          href="/home"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Home
          {/* <Box
            padding={0.5}
            display={'inline-flex'}
            borderRadius={1}
            bgcolor={'primary.main'}
            marginLeft={1}
          >
            <Typography
              variant={'caption'}
              sx={{ color: 'common.white', lineHeight: 1 }}
            >
              new
            </Typography>
          </Box> */}
        </Link>
      </Box>
      <Box marginRight={{ xs: 2, sm: 4 }}>
        <Link
          underline="none"
          component="a"
          href="/festivals"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Festivals
        </Link>
      </Box>
      <Box marginRight={{ xs: 2, sm: 4 }}>
        <Link
          underline="none"
          component="a"
          href="/calendar"
          color={colorInvert ? 'common.white' : 'text.primary'}
        >
          Calendar
        </Link>
      </Box>
      <Box marginRight={{ xs: 2, sm: 4 }}>
        <Link
          underline="none"
          component="a"
          href="/about"
          color={colorInvert ? 'common.white' : 'text.primary'}
        >
          About
        </Link>
      </Box>
      <Box>
        <ThemeModeToggler />
      </Box>
    </Box>
  );
};

export default TopNav;
