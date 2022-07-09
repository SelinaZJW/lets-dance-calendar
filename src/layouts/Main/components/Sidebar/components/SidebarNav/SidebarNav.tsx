import React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

// import NavItem from './components/NavItem';


interface Props {
  colorInvert?: boolean;
}

// interface Props {
//   pages: {
//     landings: Array<PageItem>;
//     company: Array<PageItem>;
//     account: Array<PageItem>;
//     secondary: Array<PageItem>;
//     blog: Array<PageItem>;
//     portfolio: Array<PageItem>;
//   };
// }

const SidebarNav = ({ colorInvert = false }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  // const {
  //   landings: landingPages,
  //   secondary: secondaryPages,
  //   company: companyPages,
  //   account: accountPages,
  //   portfolio: portfolioPages,
  //   blog: blogPages,
  // } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      
      <Box paddingX={2} paddingY={2}>
        <Box marginTop={3}>
          <Link
            underline="none"
            component="a"
            href="/home"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
          Home
          </Link>
        </Box>
        <Box marginTop={3}>
          <Link
            underline="none"
            component="a"
            href="/listing"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Festivals
          </Link>
        </Box>
        <Box marginTop={3}>
          <Link
            underline="none"
            component="a"
            href="/calendar"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Calendar
          </Link>
        </Box>
        <Box marginTop={3}>
          <Link
            underline="none"
            component="a"
            href="/about"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            About
          </Link>
        </Box>
        
      </Box>
      
    </Box>
  );
};

export default SidebarNav;
