import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

const country_list = [
  'Adidas',
  'Nike',
  'Puma',
  'OVS',
  'H&M',
  'Reebok',
  'Zara',
  'Other'
];

const FilterCountry = (): JSX.Element => {
  const theme = useTheme();
  const [countries, setCountries] = useState([]);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.target);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleCheckboxChange = (item) => {
    const newCountries = countries;
    const index = newCountries.indexOf(item);
    index === -1 ? newCountries.push(item) : newCountries.splice(index, 1);
    setCountries(newCountries);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleApply = () => {
    handleClose();
  };

  const handleCancel = () => {
    handleClose();
    setCountries([]);
  };

  const country_display = country_list.filter(c => c.includes(search));

  const label = countries.length === 0 ? 'Country' : countries.join(', ');

  return (
    <Box display={'flex'} justifyContent={'center'} paddingX={1} maxHeight={70}>
      <Box
        display={'flex'}
        alignItems={'center'}
        border={`1px solid ${theme.palette.divider}`}
        borderRadius={2}
        paddingY={2}
        paddingX={2}
        marginY={1}
        width={((label.length) * 10 + 42)}
        // minWidth={120}
        sx={{ cursor: 'pointer' }}
        onClick={(e) => handleClick(e)}
      >
        <Typography marginRight={1}>
          {label}
        </Typography>
        <ExpandMoreIcon
          sx={{
            marginLeft: 0,
            marginRight: 1,
            width: 16,
            height: 16,
            transform: open ? 'rotate(180deg)' : 'none',
          }}
        />
      </Box>
      <Popover
        elevation={0}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '.MuiPaper-root': {
            marginTop: 1,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
          },
        }}
      >
        <Stack spacing={2} maxWidth={460}>
          <Box padding={2}>
            <Box
              marginBottom={1}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  border: '0 !important',
                },
                '& .MuiOutlinedInput-input': {
                  padding: 1,
                },
              }}
            >
              <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  value={search}
                  onChange={handleSearchChange}
                  sx={{
                    background: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                  startAdornment={
                    <InputAdornment position="start">
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </Box>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Stack spacing={1} marginTop={1} marginLeft={2}>
              {country_display.map((item) => (
                <Box key={item}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        defaultChecked={countries.indexOf(item) >= 0}
                        onChange={() => handleCheckboxChange(item)}
                      />
                    }
                    label={item}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
          <Stack
            direction={'row'}
            spacing={2}
            padding={2}
            borderTop={`1px solid ${theme.palette.divider}`}
          >
            <Button
              fullWidth
              sx={{
                fontWeight: 700,
                color: 'text.primary',
              }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              color={'primary'}
              variant={'contained'}
              fullWidth
              onClick={handleApply}
            >
              Apply
            </Button>
          </Stack>
        </Stack>
      </Popover>
    </Box>
  );
};

export default FilterCountry;
