import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Main from '../../layouts/Main';
import Container from 'components/Container';

import {
  Headline,
  FestivalList,
  SidebarFilters,
  Newsletter,
  FiltersWithDropdown
} from './components';
import { SelectedFilters } from './components/FiltersWithDropdown/types';
import mock_festivals from 'mock_data/festivals';

const Festivals = (): JSX.Element => {

  const festivals_sorted_time = mock_festivals.sort((a, b) => a.start.getTime() - b.start.getTime());

  const [filters, setFilters] = useState<SelectedFilters>({
    styles: [],
    countries: [],
    deals: false
  });

  const findCommonElements = (arr1: string[], arr2: string[]) => {
    return arr1.some(item => arr2.includes(item));
  };

  const festivals_sorted_country = festivals_sorted_time.filter(f => filters.countries.includes(f.country));
  const festivals_sorted_deals = filters.deals === true ? festivals_sorted_country.filter(f => f.discount) : festivals_sorted_country;
  const festival_sorted_styles = festivals_sorted_deals.filter(f => findCommonElements(f.styles, filters.styles));

  const festivals_display = festival_sorted_styles;
  

  return (
    <Main>
      <Box bgcolor={'alternate.main'} >
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline />
        </Container>
      </Box>
      {/* <Container paddingBottom={'0 !important'}>
        <Banner />
      </Container> */}
    
      {/* {JSON.stringify(filters, null, 2)} */}
  

      <Container paddingY={1} >
        <FiltersWithDropdown setFilters={setFilters} />
      </Container>

      <Container paddingY={1} >
        <FestivalList festivals={festivals_display} />
      </Container>
      
      {/* <Container>
        <SidebarFilters>
          <Products />
        </SidebarFilters>
      </Container> */}
      
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Newsletter />
        </Container>
      </Box>
      
    </Main>
  );
};

export default Festivals;
