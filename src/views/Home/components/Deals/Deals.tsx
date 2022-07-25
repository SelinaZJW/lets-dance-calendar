import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Stack from '@mui/material/Stack';

const mock = [
  {
    price: '$59 / month',
    media: 'https://assets.maccarianagency.com/backgrounds/img5.jpg',
    title: 'UX & web design',
    tutor: 'Joshua Karamaki',
    users: [
      'https://assets.maccarianagency.com/avatars/img1.jpg',
      'https://assets.maccarianagency.com/avatars/img2.jpg',
      'https://assets.maccarianagency.com/avatars/img3.jpg',
      'https://assets.maccarianagency.com/avatars/img4.jpg',
      'https://assets.maccarianagency.com/avatars/img5.jpg',
    ],
  },
  {
    price: '$69 / month',
    media: 'https://assets.maccarianagency.com/backgrounds/img6.jpg',
    title: 'Software engineering',
    tutor: 'Jhon Smith',
    users: [
      'https://assets.maccarianagency.com/avatars/img1.jpg',
      'https://assets.maccarianagency.com/avatars/img2.jpg',
      'https://assets.maccarianagency.com/avatars/img3.jpg',
      'https://assets.maccarianagency.com/avatars/img4.jpg',
      'https://assets.maccarianagency.com/avatars/img5.jpg',
    ],
  },
  {
    price: '$49 / month',
    media: 'https://assets.maccarianagency.com/backgrounds/img7.jpg',
    title: 'Graphic design for beginners',
    tutor: 'Nicol Adams',
    users: [
      'https://assets.maccarianagency.com/avatars/img1.jpg',
      'https://assets.maccarianagency.com/avatars/img2.jpg',
      'https://assets.maccarianagency.com/avatars/img3.jpg',
      'https://assets.maccarianagency.com/avatars/img4.jpg',
      'https://assets.maccarianagency.com/avatars/img5.jpg',
    ],
  },
  {
    price: '$59 / month',
    media: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
    title: 'Marketing VS Sales',
    tutor: 'Joshua Karamaki',
    users: [
      'https://assets.maccarianagency.com/avatars/img1.jpg',
      'https://assets.maccarianagency.com/avatars/img2.jpg',
      'https://assets.maccarianagency.com/avatars/img3.jpg',
      'https://assets.maccarianagency.com/avatars/img4.jpg',
      'https://assets.maccarianagency.com/avatars/img5.jpg',
    ],
  },
];

const Deals = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Deals
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Festivals on discount
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Dancing on a budget? Take advantage of deals we found worldwide
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            View all
          </Button>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            fullWidth={isMd ? false : true}
          >
            Explore more
          </Box>
        </Box>
      </Box>
      <Box maxWidth={{ xs: 420, sm: 620, md: 1 }} margin={'0 auto'}>
        <Slider {...sliderOpts}>
          {mock.map((item, i) => (
            <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{ backgroundImage: 'none' }}
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
                  
                  <Box display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'} sx={{paddingX: 2}}>
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
                    
                    <Box marginTop={1.5} display={'flex'} flexDirection={'column'} alignItems={'center'}   >
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

                  <Stack marginTop={2} spacing={1} direction={'row'} sx={{ paddingX: 2, marginBottom: 2}}>
                    {/* <Button
                      color={'primary'}
                      size={'large'}
                      fullWidth
                      sx={{ bgcolor: alpha(theme.palette.primary.light, 0.1) }}
                      flex-grow={1}
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
                    </Button> */}
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
                  {/* <CardMedia
                    title={item.title}
                    image={item.media}
                    sx={{
                      position: 'relative',
                      height: { xs: 240, sm: 340, md: 280 },
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component={'svg'}
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1921 273"
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        left: 0,
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                    >
                      <polygon
                        fill={theme.palette.background.paper}
                        points="0,273 1921,273 1921,0 "
                      />
                    </Box>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      position={'absolute'}
                      bottom={0}
                      padding={2}
                      width={1}
                      zIndex={2}
                    >
                      <Box
                        padding={1}
                        bgcolor={'background.paper'}
                        boxShadow={1}
                        borderRadius={2}
                      >
                        <Typography sx={{ fontWeight: 600 }}>
                          {item.price}
                        </Typography>
                      </Box>
                      <Button
                        variant={'contained'}
                        color="primary"
                        size="large"
                        startIcon={
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={16}
                            height={16}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </Box>
                        }
                      >
                        Save
                      </Button>
                    </Box>
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      align={'left'}
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} marginY={2}>
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                        marginRight={1}
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </Box>
                      <Typography variant={'subtitle1'} color="text.secondary">
                        {item.tutor}
                      </Typography>
                    </Box>
                    <Box
                      marginTop={2}
                      display={'flex'}
                      justifyContent={'space-between'}
                    >
                      <AvatarGroup max={4}>
                        {item.users.map((u) => (
                          <Avatar key={u} src={u} />
                        ))}
                      </AvatarGroup>
                      <Box display={'flex'} alignItems={'center'}>
                        <Box
                          component={'svg'}
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          color={colors.yellow[700]}
                          marginRight={1}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </Box>
                        <Typography sx={{ fontWeight: 700 }}>5.0</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                  <Box flexGrow={1} />
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button>Learn more</Button>
                  </CardActions> */}
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Deals;
