import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Main from '../../layouts/Main';
import Container from 'components/Container';

import {
  Headline,
  BigCalendar
} from './components';
import { FiltersWithDropdown, Newsletter } from '../Festivals/components';
import { SelectedFilters } from 'views/Festivals/components/FiltersWithDropdown/types';
//import 'react-big-calendar/lib/css/react-big-calendar.css';

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
      <Container paddingY={1} >
        <FiltersWithDropdown setFilters={setFilters} />
      </Container>

      <Container paddingY={1} marginBottom={8} >
        <BigCalendar />
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
