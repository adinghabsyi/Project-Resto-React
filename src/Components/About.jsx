import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";

const theme = createTheme({
  palette: {
    primary: {
      white: "#E1D9D9",
      main: "#A33B00",
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

export default function About() {
  return (
    <div>
      <Stack alignItems="center">
        <InfoSharpIcon
          sx={{
            fontSize: 40,
            color: theme.palette.primary.contrastText,
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
          color: theme.palette.primary.contrastText,
        }}
      >
        ABOUT US
      </Typography>
      <div className="about-content">
        <div className="about-img" data-aos="fade-up" data-aos-duration="1000">
          <CardMedia
            component="img"
            height="200"
            image="./src/assets/restoran-1.jpg"
            alt="Image Description"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: theme.palette.primary.contrastText, fontSize: 20 }}
            >
              Variety of Traditional Dishes
            </Typography>
          </CardContent>
        </div>
        <div className="about-img" data-aos="fade-up" data-aos-duration="2000">
          <CardMedia
            component="img"
            height="200"
            image="./src/assets/restoran-2.jpeg"
            alt="Image Description"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: theme.palette.primary.contrastText, fontSize: 20 }}
            >
              Reservations Available
            </Typography>
          </CardContent>
        </div>
        <div className="about-img" data-aos="fade-up" data-aos-duration="3000">
          <CardMedia
            component="img"
            height="200"
            image="./src/assets/restoran-3.jpg"
            alt="Image Description"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: theme.palette.primary.contrastText, fontSize: 20 }}
            >
              Beautiful Scenery
            </Typography>
          </CardContent>
        </div>
      </div>

      <div id="menu">
        <Stack alignItems="center">
          <MenuBookSharpIcon
            sx={{
              fontSize: 40,
              color: theme.palette.primary.contrastText,
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
            color: theme.palette.primary.contrastText,
          }}
        >
          OUR MENU
        </Typography>
      </div>
    </div>
  );
}
