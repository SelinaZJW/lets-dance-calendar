import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import { FaTicketAlt, FaGlobe } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { RiContactsFill } from 'react-icons/ri';
import { BiInfoCircle } from 'react-icons/bi';

import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

interface LinkButtonsProps {
  ticket?: string;
  discount?: string;
  website?: string;
  facebook?: string;
  contact?: string;
}

const LinkButtons = ({ ticket, discount, website, facebook, contact }: LinkButtonsProps): JSX.Element => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const button_styles = {
    '&:hover': {
      // color: theme.palette.primary.main,
      color: 'black'
    }
  };

  // const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 200,
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 13,
    },
  });

  return (
    <Box 
      display={'flex'} 
      flexDirection={'column'} 
      alignItems={'flex-start'} 
      marginY={4} 
      paddingX={3}
      paddingY={2}
      sx={{
        // borderRadius: 3,
        borderLeft: 5,
        borderColor: theme.palette.secondary.main,
        padding: 1.5,
        bgcolor: 'alternate.main'
      }}
    >

      { ticket ? 
        <Box 
          sx={{paddingX: 2, paddingY: 1, marginY: 1}} 
          display={'flex'} 
          justifyContent={'space-between'} 
          alignItems={'center'}
          width={1}
        >
          <Button href={ticket} component={Link} target="_blank" sx={{padding: 0, margin: 0}} >
            <FaTicketAlt color={'grey'} size={25}  />
            <Typography fontWeight={600}  sx={button_styles} marginLeft={2} >
              Get tickets
            </Typography>
            { discount ? 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 611.999 611.999"
                fill="red"
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
              : null}
          </Button>
          { discount ?
            <ClickAwayListener onClickAway={handleTooltipClose} >
              <CustomWidthTooltip 
                title={
                  <React.Fragment>
                    Apply the promo code <b>{'"LDC"'}</b> on the official event page at checkout!
                  </React.Fragment>
                }
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                // disableFocusListener
                // disableHoverListener
                // disableTouchListener
              >
                <Button onClick={handleTooltipOpen} sx={{padding: 0, margin: 0, minWidth: 22, color: 'black'}} >
                  <BiInfoCircle size={22} />
                </Button>
              </CustomWidthTooltip>
            </ClickAwayListener>
            : null}
        </Box>
        : null}

      { website ?
        <Button href={website} component={Link} target="_blank" sx={{paddingX: 2, marginBottom: 1}}  >
          <FaGlobe color={'grey'} size={25}  />
          <Typography fontWeight={600}  sx={button_styles} marginLeft={2} >
            Website
          </Typography>
        </Button>
        : null}
      { facebook ?
        <Button href={facebook} component={Link} target="_blank" sx={{paddingX: 2, marginBottom: 1}}  >
          <BsFacebook color={'grey'} size={25}  />
          <Typography fontWeight={600}  sx={button_styles} marginLeft={2} >
            Facebook event
          </Typography>
        </Button>
        : null}
      { contact ?
        <Button href={contact} component={Link} target="_blank" sx={{paddingX: 2, marginBottom: 1}}  >
          <RiContactsFill color={'grey'} size={25}  />
          <Typography fontWeight={600}  sx={button_styles} marginLeft={2} >
            Contact
          </Typography>
        </Button>
        : null}
    </Box>
  );
};

export default LinkButtons;
