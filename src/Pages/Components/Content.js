import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image2 from "../../Assets/images/image2.png";
import { Paper } from "@mui/material";
import { WidthFull } from "@mui/icons-material";

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
        <Typography variant="body2">
          Artificial intelligence (AI) is rapidly transforming the health and
          fitness industry. AI-powered apps and devices are now able to track
          our progress, provide personalized feedback, and even create custom
          workouts for us. This personalized approach to fitness is helping
          people reach their goals faster and more effectively.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Box variant="outlined" width="1" height="300px"  objectFit="contain" sx={{ pt: 2 }}>
          <img src={image2}/>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
