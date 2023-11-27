import React from 'react';
import { Typography, Box } from '@mui/material';

const Menuitems = [
  { Name: "GAMES", Link: "/" },
  { Name: "LEGO", Link: "#" },
  { Name: "PLUSH", Link: "#" },
  { Name: "BOOKS", Link: "#" },
  { Name: "BABY & TODDLERS", Link: "#" },
  { Name: "CREATIVITY", Link: "#" },
  { Name: "CONSTRUCTION", Link: "#" },
  { Name: "IMAGINATION", Link: "#" },
  { Name: "ACTIVE PLAY & SPORTS", Link: "#" },
];

const Menu = () => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
      {Menuitems.map((item, index) => (
        <Typography key={index} sx={{ cursor: 'pointer', fontSize: '15px', marginRight: '15px' }}>
          {item.Name}
        </Typography>
      ))}
    </Box>
  );
};

export default Menu;