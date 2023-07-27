import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const theme = createTheme({
  palette: {
    primary: {
      white: '#E1D9D9',
      main: '#A33B00',
      dark: '#1e1e1e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem', color: theme.palette.primary.contrastText, borderRadius: '50%', padding: '2px' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: theme.palette.primary.white,
    flexDirection: 'row-reverse',
    border: `1px solid ${theme.palette.primary.contrastText}`,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // useEffect untuk mengatur expanded menjadi false saat komponen pertama kali di-mount
  useEffect(() => {
    setExpanded(false);
  }, []);

  return (
    <div>
    <Stack alignItems="center">
        <Avatar alt="faq icon" src="./src/assets/icons/faq-icon.png" sx={{ width: 70, height: 70, marginBottom: 2,}} />
    </Stack>
    <Typography variant='h4' align='center' sx={{ fontWeight: 'bold', marginBottom: 3, color: theme.palette.primary.contrastText, }}>Frequently Asked Questions</Typography>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: theme.palette.primary.main, marginBottom:0.3, }} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ color: theme.palette.primary.contrastText  }}>Lorem ipsum dolor sit.</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: theme.palette.primary.white }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: theme.palette.primary.main, marginBottom:0.3, }}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ color: theme.palette.primary.contrastText  }}>Lorem ipsum dolor sit amet consectetur.</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: theme.palette.primary.white }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  sx={{ backgroundColor: theme.palette.primary.main }}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: theme.palette.primary.contrastText  }}>Lorem ipsum dolor sit amet consectetur adipisicing.</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: theme.palette.primary.white }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}