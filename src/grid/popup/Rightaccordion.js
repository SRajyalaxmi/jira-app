import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Rightaccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Assignee<br/>
           Reporter<br/>
           Development<br/>
           Labels
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>More Fields</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Story Points<br/>
            Epic Link<br/>
            Components
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}