import React from "react";
import { Button, Container, Typography } from "@mui/material";
import SimpleBottomNavigation from "./Components/BottomNav.js"


function Zach() {
  return (
    <Container>
      <Typography variant="h1">Zach</Typography>
      <Button variant="contained">Hello World</Button>
      <SimpleBottomNavigation/>
    </Container>
  );
}

export default Zach;
