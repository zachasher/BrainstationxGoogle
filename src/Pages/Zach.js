import React from "react";
import { Button, Container, Typography } from "@mui/material";
import SimpleBottomNavigation from "./Components/BottomNav.js";
import DenseAppBar from "./Components/TopNavbar.js";
import HubInfo from "./Components/HubInfo.js";

function Zach() {
  return (
    <div>
      <DenseAppBar />
      <Container>
        <Typography variant="h2">Google Fit</Typography>
        <Button variant="contained">Hello World</Button>
        <HubInfo />
        <SimpleBottomNavigation />
      </Container>
    </div>
  );
}

export default Zach;
