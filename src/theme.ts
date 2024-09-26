"use client"
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#347928', // Dark green
    },
    secondary: {
      main: '#FCCD2A', // Yellow
    },
    background: {
      default: '#FFFFFF', // White background
      paper: '#F9F9F9', // Very light gray for card surfaces
    },
    text: {
      primary: '#3E3E3E', // Dark gray for text
      secondary: '#347928', // Dark green for emphasis
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#3E3E3E', // Darker gray for headlines
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#347928', // Green for subheadings
    },
    body1: {
      fontSize: '1rem',
      color: '#3E3E3E', // Text color
    },
  },
});

export default theme;
