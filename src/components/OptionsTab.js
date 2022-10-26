import React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// react icons
import { FaFilter } from 'react-icons/fa';
import { locationsTab } from '../data/mock-data';
import { locationsDTab } from '../data/mock-data';

import Divider from '@mui/material/Divider';
const OptionsTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (



   
      <Container maxWidth="xl">





      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: 'center',
          mt: 2,
          mb: 2,
        }}
      >








<Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        border: (theme) => `${theme.palette.divider}`,
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        '& svg': {
          m: 1.5,
        },
        '& hr': {
          mx: 0.5,
        },
      }}
    >
       {locationsDTab.map((tab) => {
            return <Tab key={tab.id}  label={tab.label} />;
          })}
          <Button
          sx={{
            display:'flex',
            border: '1px solid #ddd',
            width: 100,
         
            // justifyContent: 'space-between',
            borderRadius: 2,
            textTransform: 'capitalize',
            py: 1,
            color: 'theme.palette.text.primary',
          }}
        >
          <FaFilter /> Filters
        </Button>
      <Divider orientation="vertical" variant="middle" flexItem />
      </Box>













        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          {locationsTab.map((tab) => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.label} />;
          })}
        </Tabs>
        
      </Box>
    </Container>
  






















    
  );
};

export default OptionsTab;
