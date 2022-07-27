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

const Festivals = (): JSX.Element => {

  const [filters, setFilters] = useState<SelectedFilters>({
    styles: [],
    countries: [],
    deals: false
  });

  

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
        <FestivalList />
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
