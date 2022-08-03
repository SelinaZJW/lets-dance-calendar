import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Pagination from '@mui/material/Pagination';

import { FestivalQuickViewDialog, DiscountTag } from './components';
// import mock_festivals from 'mock_data/festivals';
import { months_short } from 'mock_data/dates';

// const festivals_sorted = mock_festivals.sort((a, b) => a.start.getTime() - b.start.getTime());

interface FestivalItem {
  id: number;
  title: string;
  media: string;
  city: string;
  country: string;
  specific_location: string;
  styles: string[];
  start: Date;
  discount?: string;
  organiser?: string;
  website?: string;
  facebook?: string;
  ticket?: string;
  contact?: string;
}

export interface FestivalsProps {
  festivals: FestivalItem[]
}

const Products = ({ festivals }: FestivalsProps): JSX.Element => {
  const theme = useTheme();
  const [openId, setOpenId] = useState(null);

  return (
    <Box>
      <Box marginBottom={8} >
        <Grid container spacing={{ xs: 4, md: 2 }}>
          {festivals.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i} >
              <Box display={'block'} width={1} height={1} >
                <Card
                  sx={{
                    width: 1,
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 'none',
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                  }}
                >
                  <CardMedia
                    title={item.title}
                    image={item.media}
                    sx={{
                      position: 'relative',
                      height: 250,
                      overflow: 'hidden',
                      borderRadius: 2,
                      filter:
                        theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                    }}
                  >
                    {item.discount ? <DiscountTag discount={item.discount} /> : null}
                  </CardMedia>
                  
                  <Box display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'}>
                    <Box
                      marginTop={2}
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'flex-start'}
                    >
                      <Typography
                        fontWeight={700}
                        // noWrap
                        // sx={{ textTransform: 'uppercase' }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant={'subtitle1'}
                        color={'text.secondary'}
                      >
                        {item.city ? `${item.city}, ` : null} {item.country}
                      </Typography>
                    </Box>
                    
                    <Box marginTop={1.5} display={'flex'} flexDirection={'column'} alignItems={'center'}  >
                      <Typography
                        variant={'subtitle1'}
                        color={'text.main'}
                        fontWeight={700}
                        marginLeft={0.5}
                        paddingBottom={0}
                      >
                        {item.start.getDate()}
                      </Typography>
                      <Typography
                        variant={'subtitle1'}
                        color={theme.palette.secondary.main}
                        marginLeft={0.5}
                        fontWeight={550}
                        sx={{ textTransform: 'uppercase' }}
                        paddingTop={0}
                      >
                        {months_short[item.start.getMonth()]}
                      </Typography>
                      {/* <Typography
                        variant={'caption'}
                        color={'text.secondary'}
                        marginLeft={0.5}
                      >
                        {item.reviewCount} reviews
                      </Typography> */}
                    </Box>

                  </Box>

                  <Stack marginTop={2} spacing={1} direction={'row'} >
                    <Button
                      color={'primary'}
                      size={'large'}
                      fullWidth
                      sx={{ bgcolor: alpha(theme.palette.primary.light, 0.1) }}
                      flex-grow={1}
                      onClick={() => setOpenId(i)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={20}
                        height={20}
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                    <Button
                      variant={'contained'}
                      color={'primary'}
                      size={'large'}
                      fullWidth
                      flex-grow={1}
                    >
                      <Typography marginRight={0.5} variant={'body2'}>details</Typography>
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
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={20}
                        height={20}
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg> */}
                    </Button>
                    <Button
                      color={'primary'}
                      size={'large'}
                      // fullWidth
                      flex-grow={1}
                      sx={{ bgcolor: alpha(theme.palette.primary.light, 0.1) }}
                    >
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill='white'
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={20}
                        height={20}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </Box>
                    </Button>
                    
                  </Stack>

                  {/* <Button
                    component={Link}
                    href={item.href}
                    size={'large'}
                    sx={{
                      color: theme.palette.text.primary,
                      marginTop: 1,
                      justifyContent: 'space-between',
                    }}
                    fullWidth
                    endIcon={
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
                    }
                  >
                    See the details
                  </Button> */}
                </Card>


                <FestivalQuickViewDialog
                  open={openId === i}
                  onClose={() => setOpenId(null)}
                  imageSrc={item.media}
                  details={{
                    title: item.title,
                    city: item.city,
                    country: item.country,
                    specific_location: item.specific_location,
                    styles: item.styles,
                    start: item.start,
                    organiser: item.organiser,
                    website: item.website,
                    facebook: item.facebook,
                    ticket: item.ticket,
                    discount: item.discount,
                    contact: item.contact,
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box display={'flex'} justifyContent={'center'} width={1}>
        <Pagination count={10} size={'large'} color="primary" />
      </Box>

    </Box>
  );
};

export default Products;
