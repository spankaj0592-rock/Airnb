import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// components
import Logo from './Logo';
import SliderImages from './SliderImages';

import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from '../themes/commonStyles';
import ProfileSettings from './ProfileSettings';


const Navbar = () => {
  return (
    <><Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>

          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>

        </Box>
      </Container>
    </Box><SliderImages /></>
  );
};

export default Navbar;
