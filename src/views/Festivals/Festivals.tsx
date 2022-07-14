import React from 'react';
import Box from '@mui/material/Box';

import Main from '../../layouts/Main';
import Container from 'components/Container';

import {
  Headline,
  FestivalList,
  SidebarFilters,
  Newsletter,
} from './components';
import FiltersWithDropdown from './components/FiltersWithDropdown';

const Festivals = (): JSX.Element => {
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
      <Container paddingY={1} id='1'>
        <FiltersWithDropdown>
          <FestivalList />
        </FiltersWithDropdown>
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
      
      {/* Deals here maybe?? */}
      {/* <Container>
        <Partners /> 
      </Container> */}
    </Main>
  );
};

export default Festivals;
