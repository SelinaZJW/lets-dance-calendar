/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
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
import mock_regions from 'mock_data/regions';
import mock_styles from 'mock_data/styles';

interface Props {
  // children: React.ReactNode;
  setFilters: (SelectedFilters) => void
}

const FiltersWithDropdown = ({ setFilters }: Props): JSX.Element => {
  const theme = useTheme();
  const full_countries = mock_regions.flatMap(r => r.countries);
  const full_styles = mock_styles;

  const [countrySelect, setCountrySelect] = useState([]);        //countries selected by checkbox
  const [countryList, setCountryList] = useState(full_countries);   //country list displayed in filter

  const [countryFilter, setCountryFilter] = useState(full_countries); //country array used to filter festivals
  const [styleFilter, setStyleFilter] = useState(full_styles);
  const [showDeals, setShowDeals] = useState(false);

  useEffect(() => {
    setFilters({
      styles: styleFilter,
      countries: countryFilter,
      deals: showDeals
    });
  }, [styleFilter, countryFilter, showDeals]);

  const handleRegionChange = (event) => {
    console.log(event.target.value);
    setCountrySelect([]);

    if (event.target.value !== 'Worldwide') {
      const region_countries = mock_regions.find(r => r.name === event.target.value).countries;
      setCountryList(region_countries);
      setCountryFilter(region_countries);
    }
    if (event.target.value === 'Worldwide') {
      setCountryList(full_countries);
      setCountryFilter(full_countries);
    }
  };

  const handleCountryChange = () => {
    setCountryFilter(countrySelect);
  };

  const handleCountryReset = () => {
    setCountryFilter(countryList);
  };

  const handleStylesChange = (styles: string[]) => {
    setStyleFilter(styles);
  };


  const handleStylesReset = () => {
    setStyleFilter(full_styles);
  };

  const handleShowDealsChange = () => {
    if (showDeals === false) {
      setShowDeals(true);
    }
    else {
      setShowDeals(false);
    }
  };

  console.log('styles:', styleFilter);
  console.log('countries:', countryFilter);
  console.log('deals:' + showDeals);

  return (
    <Container paddingTop={4}>
      <Box
        display={'flex'}
        // alignItems={{ xs: 'flex-start', md: 'flex-start', lg: 'center' }}
        alignItems={'flex-start'}
        justifyContent={'space-between'}
        // flexDirection={{ xs: 'column', md: 'column', lg:'row' }}
        flexDirection={'column'}
        // marginY={4}
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
              <FilterStyle handleStylesChange={handleStylesChange} handleStylesReset={handleStylesReset}  />
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
              <FilterRegion handleRegionChange={handleRegionChange} />
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
              <FilterCountry country_list={countryList} countries={countrySelect} setCountries={setCountrySelect} handleCountryChange={handleCountryChange} handleCountryReset={handleCountryReset} />
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
            <Checkbox color='primary' onChange={handleShowDealsChange}  />
            <Typography fontWeight={700} sx={{ whiteSpace: 'nowrap' }} >
              Deals
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 611.999 611.999"
              fill="red"
              height={20}
            >
              <path
                d='M216.02,611.195c5.978,3.178,12.284-3.704,8.624-9.4c-19.866-30.919-38.678-82.947-8.706-149.952
                c49.982-111.737,80.396-169.609,80.396-169.609s16.177,67.536,60.029,127.585c42.205,57.793,65.306,130.478,28.064,191.029
                c-3.495,5.683,2.668,12.388,8.607,9.349c46.1-23.582,97.806-70.885,103.64-165.017c2.151-28.764-1.075-69.034-17.206-119.851
                c-20.741-64.406-46.239-94.459-60.992-107.365c-4.413-3.861-11.276-0.439-10.914,5.413c4.299,69.494-21.845,87.129-36.726,47.386
                c-5.943-15.874-9.409-43.33-9.409-76.766c0-55.665-16.15-112.967-51.755-159.531c-9.259-12.109-20.093-23.424-32.523-33.073
                c-4.5-3.494-11.023,0.018-10.611,5.7c2.734,37.736,0.257,145.885-94.624,275.089c-86.029,119.851-52.693,211.896-40.864,236.826
                C153.666,566.767,185.212,594.814,216.02,611.195z'
              />
            </svg>
            
            {/* <SortBySelectBox /> */}
          </Box>
        </Box>

      </Box>

      {/* <Box marginBottom={8}>{children}</Box>

      <Box display={'flex'} justifyContent={'center'} width={1}>
        <Pagination count={10} size={'large'} color="primary" />
      </Box> */}

    </Container>
  );
};

export default FiltersWithDropdown;
