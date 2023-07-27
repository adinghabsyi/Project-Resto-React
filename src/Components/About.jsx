import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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

export default function About() {
  return (
    <div>
      <Stack alignItems="center">
        <Avatar
          alt="faq icon"
          src="./src/assets/icons/about-icon.png"
          sx={{ width: 70, height: 70, marginBottom: 2 }}
        />
      </Stack>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', marginBottom: 3, color: theme.palette.primary.contrastText }}
      >
        About Us ❤️
      </Typography>
      <div className="about-content">
        <div className="about-img">
            <CardMedia
                component="img"
                height="200"
                image="./src/assets/restoran-1.jpg" // Ganti dengan path gambar yang sesuai
                alt="Image Description" // Ganti dengan deskripsi gambar yang sesuai
                />
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ color: theme.palette.primary.contrastText, fontSize: 20, }}>
                Variety of Traditional Dishes
                </Typography>
            </CardContent>
        </div>
        <div className="about-img">
        <CardMedia
            component="img"
            height="200"
            image="./src/assets/restoran-2.jpeg" // Ganti dengan path gambar yang sesuai
            alt="Image Description" // Ganti dengan deskripsi gambar yang sesuai
            />
        <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ color: theme.palette.primary.contrastText, fontSize: 20, }}>
            Reservations Available
            </Typography>
        </CardContent>
        </div>
        <div className="about-img">
            <CardMedia
                component="img"
                height="200"
                image="./src/assets/restoran-3.jpg" // Ganti dengan path gambar yang sesuai
                alt="Image Description" // Ganti dengan deskripsi gambar yang sesuai
                />
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ color: theme.palette.primary.contrastText, fontSize: 20, }}>
                Beautiful Scenery
                </Typography>
            </CardContent>
        </div>
    </div>

      <Stack alignItems="center">
        <Avatar
          alt="faq icon"
          src="./src/assets/icons/about-icon.png"
          sx={{ width: 70, height: 70, marginBottom: 2 }}
        />
      </Stack>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', marginBottom: 3, color: theme.palette.primary.contrastText }}
      >
        Our Menu
      </Typography>
    </div>
  );
}
