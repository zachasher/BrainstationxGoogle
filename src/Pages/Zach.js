import React from "react";
import { Box, Container } from "@mui/material";
import SimpleBottomNavigation from "./Components/BottomNav.js";
import DenseAppBar from "./Components/TopNavbar.js";
import HubInfo from "./Components/HubInfo.js";
import BasicCard from "./Components/Content.js";
import fitlogo from "../Assets/images/fitlogo.png";

function Zach() {
  return (
    <div>
      <DenseAppBar />
      <Container>
        <Box
          variant="outlined"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 5, pb: 5 }}
        >
          <img height={150} src={fitlogo} alt="Google Fit"/>
        </Box>
        <BasicCard />
        <HubInfo />
        <SimpleBottomNavigation />
      </Container>
    </div>
  );
}

export default Zach;
