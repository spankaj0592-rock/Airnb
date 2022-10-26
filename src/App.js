import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar'
import OptionsTab from './components/OptionsTab';
import Container from '@mui/material/Container';
import LocationCards from './components/LocationCards';
import React from 'react';
import './App.css';
import SliderImages from './components/SliderImages'
import { displayOnDesktop } from './themes/commonStyles';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Navbar />
     
        </Box>
           <OptionsTab />
        <Box
      
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
          
          </Container>
        </Box>
       
      </Box>
    </React.Fragment>
  );
}

export default App;
