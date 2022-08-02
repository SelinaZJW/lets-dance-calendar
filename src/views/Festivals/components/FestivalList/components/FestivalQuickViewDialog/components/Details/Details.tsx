import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { IoLocationSharp } from 'react-icons/io5';

import { days, months } from 'mock_data/dates';
import LinkButtons from './LinkButtons';

interface Props {
  title: string;
  city: string;
  country: string;
  specific_location: string;
  styles: string[];
  start: Date;
  discount?: string;
  organiser: string;
  website?: string;
  facebook?: string;
  ticket?: string;
  contact?: string;
}

const Details = ({
  title,
  city,
  country,
  specific_location,
  styles,
  start,
  discount,
  organiser,
  website,
  facebook,
  ticket,
  contact,
}: Props): JSX.Element => {
  const theme = useTheme();
  
  return (
    <Box>
      <Typography variant={'h5'} fontWeight={700} gutterBottom>
        {title}
      </Typography>
      
      <Box 
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant={'subtitle1'} fontWeight={500} color={'text.secondary'} marginBottom={0.5}>
          {city ? `${city}, ` : null} {country}
        </Typography>
        <Typography variant={'subtitle1'} fontWeight={500} color={'text.secondary'} marginBottom={0.5}>
          {days[start.getDay()]}, {start.getDate()} {months[start.getMonth()]} {start.getFullYear()}
        </Typography>
      </Box>
      <Typography variant={'subtitle1'} fontWeight={500} color={'text.main'}>
        <strong>Styles:</strong> {styles.toString()}
      </Typography>
      
      <Box
        // marginTop={1}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant={'subtitle1'} fontWeight={500} color={'text.main'}>
          <strong>Location:</strong> {specific_location}
        </Typography>
        
        <Link underline='always' href={`https://www.google.com/maps?q=${specific_location}`} target="_blank">
          <Box display={'flex'} alignItems={'center'} >
            <IoLocationSharp color={theme.palette.primary.main} size={20} />
            <Typography
              variant={'subtitle2'}
              color={theme.palette.primary.main}
              marginLeft={0.5}
              fontWeight={600}
            >
              Map
            </Typography>
          </Box>
        </Link>
      </Box>

      <LinkButtons ticket={ticket} discount={discount} website={website} facebook={facebook} contact={contact} />
      
      <Stack marginTop={2} spacing={1} direction={'row'}>
        <Button
          variant={'contained'}
          color={'primary'}
          size={'large'}
          fullWidth
        >
          <Typography marginRight={0.5} variant={'body1'}>Full details</Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={20}
            height={20}
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <Button
          color={'primary'}
          size={'large'}
          fullWidth
          sx={{ bgcolor: alpha(theme.palette.primary.light, 0.1) }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            width={20}
            height={20}
            stroke="currentColor"
          >
            <path
              fillRule="evenodd"
              strokeWidth={2}
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          
        </Button>
      </Stack>
    </Box>
  );
};

export default Details;