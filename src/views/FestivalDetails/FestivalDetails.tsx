import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {
  Headline,
  Image,
  Details,
  Reviews,
  Newsletter,
  Details_2,
  Deals
} from './components';

import Main from '../../layouts/Main';
import Container from 'components/Container';

const mock = {
  images: [
    'https://assets.maccarianagency.com/backgrounds/img57.jpg',
    // 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
    // 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
  ],
  image: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
  title: 'Sport shoes',
  description:
    'The finishes of this product are very realistic with a double stitching on the neck, sleeves and bottom, and with a banded neck cleaning that allows optimal support in all situations.',
  price: '$59.99',
  reviewScore: 4,
  reviewCount: 519,
};
const FestivalDetails = (): JSX.Element => {
  return (
    <Main>
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline />
        </Container>
      </Box>
      <Container>
        <Box paddingX={5}>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={6}>
              {/* <Image images={mock.images} title={mock.title}  /> */}
              <Box
                sx={{
                  width: 1,
                  maxHeight: 1,
                  position: 'relative',
                  '& img': {
                    width: 1,
                    height: 1,
                    objectFit: 'cover',
                    borderRadius: 2,
                  },
                }}
              >
                <img src={mock.image} alt={mock.title} loading={'lazy'} />
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
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Details_2
                title={mock.title}
                description={mock.description}
                price={mock.price}
                reviewCount={mock.reviewCount}
                reviewScore={mock.reviewScore}
                href={'123'}
              />
              {/* <Details
                title={mock.title}
                description={mock.description}
                price={mock.price}
                reviewCount={mock.reviewCount}
                reviewScore={mock.reviewScore}
              /> */}
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* <Container paddingY={4} id="reviews">
        <Divider />
      </Container> */}
      {/* <Container>
        <Reviews />
      </Container> */}
      <Container paddingY={4}>
        <Divider />
      </Container>
      <Container>
        <Deals />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Newsletter />
        </Container>
      </Box>
    </Main>
  );
};

export default FestivalDetails;
