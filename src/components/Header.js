// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import { Grid, Typography } from "@mui/material";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3" component="h3" gutterBottom>
          Call a Friend
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          Your friendly contact app
        </Typography>
      </Grid>
    </>
  );
};

export default Header;
