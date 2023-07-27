import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
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

export default function ActionAreaCard({ harga, title, subheader, img, alt, desc }) {
  return (

    <div className='card-content'>
      <Card sx={{ width: 300, height: 420, backgroundColor: theme.palette.primary.dark }}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: theme.palette.primary.dark, borderRight: '1px solid rgb(221, 221, 221)', }} aria-label="recipe">
              {harga}
            </Avatar>
          }
          title={
            <Typography variant="h6" component="div" sx={{ color: theme.palette.primary.contrastText }}>
              {title}
            </Typography>
          }
          subheader={
            <Typography variant="subtitle2" component="div" sx={{ color: theme.palette.primary.contrastText }}>
              {subheader}
            </Typography>
          }
        />
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={alt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ color: theme.palette.primary.contrastText }}>
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
