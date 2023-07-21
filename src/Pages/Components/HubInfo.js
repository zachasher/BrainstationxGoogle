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

function HubInfo() {
  return (
    <Box display="flex"
    justifyContent="center"
    alignItems="center">
      <Card sx={{ width: 1 }}>
      <Typography variant="h3" component="h2">
        AI Hub
      </Typography>
      <Typography variant="body1" component="h2" sx={{color:"grey"}}>
        Learn everything you need to about AI
      </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#4285F4" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ color: "#4285F4" }}>1. How AI can improve your health</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#4285F4" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: "#4285F4" }}>2.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#4285F4" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: "#4285F4" }}>3.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#4285F4" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: "#4285F4" }}>4.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#4285F4" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: "#4285F4" }}>5.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Box>
  );
}

export default HubInfo;
