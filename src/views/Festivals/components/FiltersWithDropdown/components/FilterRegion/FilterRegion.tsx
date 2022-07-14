import React from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';

const FilterRegion = (): JSX.Element => {


  return (
    <Box display={'flex'} justifyContent={'center'}  >
      <FormControl sx={{ m: 1, minWidth: 120, height: 40}}  >
        <InputLabel htmlFor="grouped-select" >Region</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          {/* <option aria-label="None" value="" />
          <option value={1}>Worldwide</option>
          <option value={2}>Africa</option>
          <option value={3}>Asia</option>
          <optgroup label="Americas">
            <option value={4}>Carribean</option>
            <option value={5}>Central America</option>
            <option value={6}>North America</option>
            <option value={7}>South America</option>
          </optgroup>
          <option value={8}>Europe</option>
          <option value={9}>Middle East</option>
          <optgroup label="Oceania">
            <option value={10}>Australia</option>
            <option value={11}>New Zealand</option>
          </optgroup> */}
          <MenuItem value=""></MenuItem>
          <MenuItem value={1}> Worldwide </MenuItem>
          <MenuItem value={2}> Africa </MenuItem>
          <MenuItem value={3}> Asia </MenuItem>
          <ListSubheader> Americas </ListSubheader>
          <MenuItem sx={{marginLeft: 2}} value={4}>Carribeans</MenuItem>
          <MenuItem sx={{marginLeft: 2}} value={5}> Central America</MenuItem>
          <MenuItem sx={{marginLeft: 2}} value={6}> North American </MenuItem>
          <MenuItem sx={{marginLeft: 2}} value={7}> South American </MenuItem>
          <MenuItem value={8}> Europe </MenuItem>
          <MenuItem value={9}> Middle East </MenuItem>
          <MenuItem value={10}> Oceania </MenuItem>
          {/* <ListSubheader > Oceania </ListSubheader>
          <MenuItem sx={{marginLeft: 2}} value={3}>Australia</MenuItem>
          <MenuItem sx={{marginLeft: 2}} value={4}>New Zealand</MenuItem> */}
        </Select>
      </FormControl>
      
    </Box>
  );
};

export default FilterRegion;
