/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';

const months = [
  {
    value: 1,
    name: 'January'
  },
  {
    value: 2,
    name: 'February'
  },
  {
    value: 3,
    name: 'March'
  },
  {
    value: 4,
    name: 'April'
  },
  {
    value: 5,
    name: 'May'
  },
  {
    value: 6,
    name: 'June'
  },
  {
    value: 7,
    name: 'July'
  },
  {
    value: 8,
    name: 'August'
  },
  {
    value: 9,
    name: 'September'
  },
  {
    value: 10,
    name: 'October'
  },
  {
    value: 11,
    name: 'November'
  },
  {
    value: 12,
    name: 'December'
  },
];

const FeatureListWithForm = (): JSX.Element => {
  const theme = useTheme();

  const [year, setYear] = React.useState('');
  const [month, setMonth] = React.useState('');
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  const currentMonth = currentTime.getMonth() + 1;
  console.log(currentYear, currentMonth);

  const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };
  const handleMonthChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value);
  };


  return (
    <Box >
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        marginBottom={0}
        color={'secondary'}
        align={'center'}
      >
        Calendar
      </Typography>

      <Container marginTop={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box maxWidth={500}  margin={'0 auto'}>
              <Card
                sx={{
                  boxShadow: 4,
                }}
              >

                <CardMedia>
                  <Box
                    component={'img'}
                    src={
                      'https://assets.maccarianagency.com/backgrounds/img3.jpg'
                    }
                    // height={{ xs: 240, sm: 340, md: 280 }}
                    width={1}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                </CardMedia>

                {/* <CardContent>
                  <form noValidate autoComplete="off">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Full name"
                          name="fullName"
                          fullWidth
                          type="text"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Email"
                          name="email"
                          fullWidth
                          type="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Occupation" fullWidth />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent> */}
              </Card>
            </Box>
          </Grid>

          <Grid item container alignItems={'center'} xs={12} md={6}>
            <Box>
              <Box marginBottom={5}>
                <Typography
                  variant={'h4'}
                  sx={{ fontWeight: 700 }}
                  align={'center'}
                  marginBottom={4}
                >
                  Our favorite calendar view{' '}
                </Typography>
                <Typography color="text.secondary">
                  Use our unique event calendar to browse festivals for a particular month or week.
                  You can also filter with region and styles to tailor your own calendar.
                </Typography>
              </Box>
              
              <Box>
                <Typography
                  color={'primary'}
                  variant={'subtitle1'}
                  sx={{ fontWeight: 700 }}
                  align={'center'}
                  marginBottom={2}
                >
                  TRY IT OUT
                </Typography>

                <Grid container alignItems={'center'} justifyContent={'center'}  >
                  <Grid item>
                    <FormControl sx={{ m: 1, minWidth: 90, minHeight: 55  }}>
                      <InputLabel id="demo-simple-select-label">year</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year}
                        label="Year"
                        onChange={handleYearChange}
                      >
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2024}>2024</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl sx={{ m: 1, minWidth: 140, minHeight: 55  }}>
                      <InputLabel id="demo-simple-select-label">month</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={month}
                        label="Month"
                        onChange={handleMonthChange}
                      >
                        {months.map((m) => (
                          <MenuItem
                            key={m.value}
                            value={m.value}
                          >
                            {m.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ m: 1, minWidth: 100, minHeight: 55 }}
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
                      Explore
                    </Button>
                  </Grid>
                </Grid>

              </Box>
             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureListWithForm;
