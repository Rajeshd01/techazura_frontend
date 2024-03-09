import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NestedModal from "../../Components/NestedModal";


import "./index.css"

export default function ButtonAppBar() {
  return (
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="fixed" sx={{ backgroundColor: "#000000c5",backdropFilter:"blur(7px)" }}>
          <Toolbar  sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography variant="h6" component="div" >
              <h2 className="header-logo">Tech <span >Azura</span></h2>
            </Typography>
            <Typography variant="h6" component="div">
              <NestedModal />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
