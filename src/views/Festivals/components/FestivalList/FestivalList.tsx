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

import { FestivalQuickViewDialog } from './components';

const mock = [
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
    title: 'The Big Salsa Fest',
    description: 'Discover the new collection of Adidas.',
    price: '$69.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 12,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img63.jpg',
    title: '12th San Francisco Intl Bachata Festival 2022',
    description: 'Colorful shoes designed for everyone.',
    price: '$39.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 6,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
    title: 'Nike',
    description: 'New arrivals of Nike sport shoes.',
    price: '$49.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 8,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
    title: 'Sneakers',
    description: 'Trendy Sneakers designed for everyone.',
    price: '$59.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 10,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
    title: 'Adidas shoes',
    description: 'Discover the new collection of Adidas.',
    price: '$69.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 12,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img63.jpg',
    title: 'Colorful shoes',
    description: 'Colorful shoes designed for everyone.',
    price: '$39.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 6,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
    title: 'Nike',
    description: 'New arrivals of Nike sport shoes.',
    price: '$49.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 8,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
    title: 'Sneakers',
    description: 'Trendy Sneakers designed for everyone.',
    price: '$59.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 10,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
    title: 'Adidas shoes',
    description: 'Discover the new collection of Adidas.',
    price: '$69.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 12,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img63.jpg',
    title: 'Colorful shoes',
    description: 'Colorful shoes designed for everyone.',
    price: '$39.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 6,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
    title: 'Nike',
    description: 'New arrivals of Nike sport shoes.',
    price: '$49.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 8,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
    title: 'Sneakers',
    description: 'Trendy Sneakers designed for everyone.',
    price: '$59.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 10,
  },
];

const Products = (): JSX.Element => {
  const theme = useTheme();
  const [openId, setOpenId] = useState(null);

  return (
    <Grid container spacing={{ xs: 4, md: 2 }}>
      {mock.map((item, i) => (
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
                <Box
                  padding={1}
                  bgcolor={'red'}
                  boxShadow={2}
                  borderRadius={2}
                  position={'absolute'}
                  top={16}
                  right={16}
                  display={'flex'}
                  alignItems={'center'}
                  sx={{ cursor: 'pointer' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 611.999 611.999"
                    fill="white"
                    width={20}
                    height={17}
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
                  <Typography color={'white'} variant={'body2'} fontWeight={1000}>
                    10% OFF
                  </Typography>
                </Box>
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
                    location, location
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
                    20
                  </Typography>
                  <Typography
                    variant={'subtitle1'}
                    color={theme.palette.secondary.main}
                    marginLeft={0.5}
                    sx={{ textTransform: 'uppercase' }}
                    paddingTop={0}
                  >
                    July
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
                description: item.description,
                price: item.price,
                href: item.href,
                reviewScore: 5,
                reviewCount: 12,
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
