/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Checkbox from '@mui/material/Checkbox';

import {
  FilterStyle,
  FilterRegion,
  FilterCountry,

  FilterPrice,
  FilterColor,
  FilterBrand,
  SortBySelectBox,
} from './components';

import Container from 'components/Container';

interface Props {
  children: React.ReactNode;
}

const FiltersWithDropdown = ({ children }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Container paddingY={4}>
      <Box
        display={'flex'}
        // alignItems={{ xs: 'flex-start', md: 'flex-start', lg: 'center' }}
        alignItems={'flex-start'}
        justifyContent={'space-between'}
        // flexDirection={{ xs: 'column', md: 'column', lg:'row' }}
        flexDirection={'column'}
        marginY={4}
        marginTop={0}
      >
        <Box width={1} display={'flex'} >
          <Box
            display={'flex'}
            alignItems={'center'}
            paddingBottom={{ xs: 1, md: 0 }}
            overflow={'auto'}
          >
            <Typography 
              variant={'h6'}
              color={'primary'}
              fontWeight={700}
              sx={{
                background: `linear-gradient(180deg, transparent 82%, ${alpha(
                  theme.palette.secondary.main,
                  0.3
                )} 0%)`,
                whiteSpace: 'nowrap'
              }}
            > 
              Let's dance
            </Typography>
            <Box marginX={1} height={70}>
              <FilterStyle />
            </Box>
            <Typography 
              variant={'h6'}
              color={'primary'}
              fontWeight={700}
              sx={{
                background: `linear-gradient(180deg, transparent 82%, ${alpha(
                  theme.palette.secondary.main,
                  0.3
                )} 0%)`,
                whiteSpace: 'nowrap'
              }}
            >
              in
            </Typography>

            <Box marginX={1} height={70} >
              <FilterRegion />
            </Box>
            <Typography 
              variant={'h6'}
              color={'primary'}
              fontWeight={700}
              sx={{
                background: `linear-gradient(180deg, transparent 82%, ${alpha(
                  theme.palette.secondary.main,
                  0.3
                )} 0%)`,
                whiteSpace: 'nowrap'
              }}
            >
              @
            </Typography>
            <Box marginX={1}  alignContent={'center'} height={70} maxHeight={70}>
              <FilterCountry />
            </Box>

            {/* <Box marginX={1}>
              <FilterPrice />
            </Box>
            <Box marginX={1}>
              <FilterColor />
            </Box>
            <Box marginX={1}>
              <FilterBrand />
            </Box> */}

          </Box>
        </Box>
        
        <Box
          display={'flex'}
          alignItems={'flex-end'}
          justifyContent={'space-between'}
          flexDirection={'row-reverse'}
          width={1}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            marginTop={1}
          >
            <Checkbox color='primary' />
            <Typography fontWeight={700} sx={{ whiteSpace: 'nowrap' }} marginRight={1}>
              Deals
            </Typography>
            {/* <SortBySelectBox /> */}
          </Box>
        </Box>

      </Box>

      <Box>{children}</Box>
      <Box display={'flex'} justifyContent={'center'} width={1}>
        <Pagination count={10} size={'large'} color="primary" />
      </Box>

    </Container>
  );
};

export default FiltersWithDropdown;
