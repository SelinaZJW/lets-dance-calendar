import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const style_list = [
  'Bachata', 'Ballroom', 'Bolero', 'Cha-cha',
  'Cuban-Salsa', 'Flamenco', 'Kizomba', 'Mambo',
  'Merengue', 'Salsa', 'Samba', 'Tango', 'Zouk'
];
 
interface Props {
  handleSelectionChange: (s: string) => void;
  s: string;
  i: number;
  styles: string[]
}

//so proud of this bit!!! PROBLEM SOLVERRRRRR
const StyleBox = ({handleSelectionChange, s, i, styles}: Props): JSX.Element => {
  const theme = useTheme();
  const defaultColor = styles.includes(s) ? theme.palette.primary.main : theme.palette.divider;
  const [borderColor, setBorderColor] = useState(defaultColor);

  const onClick = () => {
    handleSelectionChange(s);
    if (borderColor === theme.palette.divider) {
      setBorderColor(theme.palette.primary.main);
    } else {
      setBorderColor(theme.palette.divider);
    }
  };
 
  return (
    <Grid item key={i}>
      <Box
        key={s}
        onClick={() => onClick()}
        sx={{
          borderRadius: 2,
          padding: 1,
          // border: `2px solid ${
          //   styles.includes(s)
          //     ? theme.palette.primary.main
          //     : theme.palette.divider
          // }
          // `,
          border: `2px solid ${borderColor}`,
          cursor: 'pointer',
          marginY: 1,
          width: 'auto'
        }}
      >
        <Typography>{s}</Typography>
      </Box>
    </Grid>
  );
};

const FilterStyle = (): JSX.Element => {
  const theme = useTheme();
  const [styles, setStyles] = useState([]);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.target);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleSelectionChange = (item) => {
    const newStyles = styles;
    const index = newStyles.indexOf(item);
    index === -1 ? newStyles.push(item) : newStyles.splice(index, 1);
    setStyles(newStyles);
    console.log(styles);
  };

  const handleApply = () => {
    handleClose();
  };

  const handleReset = () => {
    handleClose();
    setStyles([]);
  };

  const label = styles.length === 0 ? 'Style' : styles.join(', ');

  return (
    <Box display={'flex'} justifyContent={'center'} maxHeight={70}>
      <Box
        display={'flex'}
        alignItems={'center'}
        border={`1px solid ${theme.palette.divider}`}
        borderRadius={2}
        paddingY={2}
        paddingX={2}
        marginY={1}
        width={((label.length) * 10 + 42) + 'px'}
        sx={{ cursor: 'pointer' }}
        onClick={(e) => handleClick(e)}
      >
        <Typography>
          {label}
        </Typography>
        <ExpandMoreIcon
          sx={{
            marginLeft: 0.5,
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
        <Stack spacing={2} width={460}>
          <Box padding={2}>
            <Grid container justifyItems={'center'} spacing={1} rowSpacing={1}>
              {style_list.map((s, i) => (
                <StyleBox s={s} i={i} handleSelectionChange={handleSelectionChange} styles={styles} key={i} />
              ))}
              
            </Grid>
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
              onClick={handleReset}
            >
              Reset
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

export default FilterStyle;
