import React from "react";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { grey } from '@mui/material/colors';
import graph from "../../Assets/images/Screen Shot 2023-07-21 at 3.25.33 PM.png";
import "./hub-info.css";


function HubInfo() {
  return (
    <Box display="flex"
    justifyContent="center"
    alignItems="center">
      <Card sx={{ width: 1 }}>
      <Typography variant="h5" component="h2" sx={{p: 2}}>
        Ways in which AI can improve your health
      </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#4285F4" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ color: "#4285F4" }}>1. Personalized health and fitness plans</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            AI can be used to analyze individual health data, such as fitness levels, medical history, and dietary habits, to create personalized health and fitness plans. These plans can be tailored to each individual's specific needs and goals, and can help people to achieve their health and fitness goals more effectively.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#4285F4" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: "#4285F4" }}>2. Real-time health monitoring</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            AI-powered devices can be used to monitor biometric data, such as heart rate, blood pressure, and blood sugar levels, in real time. This data can be used to track progress, identify potential health problems, and provide personalized feedback to help people stay healthy.
            </Typography>
            <img src={graph} className="graph-image"/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#4285F4" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: "#4285F4" }}>3. Virtual coaching</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            AI-powered personal trainers can provide virtual coaching to help people achieve their health and fitness goals. These trainers can use AI to analyze individual progress, provide personalized feedback, and adjust workout plans as needed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#4285F4" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: "#4285F4" }}>4. Gamification</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            AI can be used to gamify health and fitness apps and programs. This can make them more engaging and fun, which can help people to stay motivated and reach their goals.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#4285F4" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: "#4285F4" }}>5. Social support</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            AI can be used to create social support networks for people who are trying to improve their health and fitness. These networks can provide people with encouragement, motivation, and tips, which can help them to stay on track.

These are just a few of the ways that AI can improve health and fitness. As AI technology continues to develop, we can expect to see even more innovative and effective ways to use AI to improve our health and well-being.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Box>
  );
}

export default HubInfo;
