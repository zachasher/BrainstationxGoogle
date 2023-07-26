import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import image2 from "../../Assets/images/image2.png";
import "./hub-info.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ width: 1, mb: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{pt: 1, pb: 1}}>
          AI is revolutionising the way <br /> we stay fit & healthy
        </Typography>
        <Typography variant="body2" sx={{pb: 2}}>
          Artificial intelligence (AI) is rapidly transforming the health and
          fitness industry. AI-powered apps and devices are now able to track
          our progress, provide personalized feedback, and even create custom
          workouts for us. This personalized approach to fitness is helping
          people reach their goals faster and more effectively.
        </Typography>
        <Box sx={{width: 1}}
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover">
      <img src={image2} className="sports-image"/>
    </Box>
      </CardContent>
    </Card>
  );
}
