import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";

const theme = createTheme({
  palette: {
    primary: {
      white: "#E1D9D9",
      main: "#E6DCC8",
      dark: "#1e1e1e",
      contrastText: "#2A2927",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "1rem",
          color: theme.palette.primary.contrastText,
          borderRadius: "50%",
          padding: "2px",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.primary.white,
  flexDirection: "row-reverse",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

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
        <HelpOutlineSharpIcon
          sx={{
            fontSize: 40,
            color: theme.palette.primary.dark,
            marginBottom: 1,
          }}
        />
      </Stack>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          marginBottom: 3,
          color: theme.palette.primary.dark,
        }}
      >
        FREQUENTLY ASKED QUESTIONS
      </Typography>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ backgroundColor: theme.palette.primary.main, marginBottom: 0.3 }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ color: theme.palette.primary.contrastText }}>
            Apa jenis hidangan yang ditawarkan oleh restoran kami?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: theme.palette.primary.white }}>
          <Typography>
            Restoran kami menyajikan beragam hidangan pembuka, hidangan utama,
            dan hidangan penutup. Anda dapat menemukan berbagai pilihan hidangan
            mulai dari salad, risoles, lumpia, tahu isi, martabak, hingga
            berbagai hidangan utama seperti ayam goreng, ikan bakar, dan nasi
            Padang. Jangan lupa untuk mencicipi juga hidangan penutup kami yang
            lezat seperti es krim, pie, dan jajan pasar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ backgroundColor: theme.palette.primary.main, marginBottom: 0.3 }}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ color: theme.palette.primary.contrastText }}>
            Apakah restoran kami menyediakan hidangan vegetarian?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: theme.palette.primary.white }}>
          <Typography>
            Tentu saja! Kami juga menyajikan hidangan yang cocok untuk para
            pelanggan vegetarian. Anda dapat menemukan pilihan hidangan pembuka,
            hidangan utama, dan hidangan penutup yang terbuat dari bahan-bahan
            segar dan berkualitas, khusus untuk memenuhi kebutuhan dan selera
            para pelanggan vegetarian kami.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: theme.palette.primary.contrastText }}>
            Apakah restoran kami menyediakan layanan pesan antar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: theme.palette.primary.white }}>
          <Typography>
            Ya, restoran kami menyediakan layanan pesan antar untuk kenyamanan
            pelanggan kami. Anda dapat melakukan pemesanan melalui telepon atau
            melalui platform pemesanan online yang telah kami sediakan. Tim kami
            akan dengan senang hati mengantarkan hidangan pilihan Anda ke tempat
            tujuan dengan cepat dan aman.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
