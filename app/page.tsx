'use client'; // Mark this file as a Client Component

// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import DropDown from '../Components/DropDown';

// Import Google Fonts
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif', // Include your global font stack
  },
});

export default function HomePage() {
  // State to track if the user has scrolled past the hero section
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero-section').offsetHeight;
      const scrollPosition = window.scrollY + 125;
      if (scrollPosition > heroHeight) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar with Text-based Logo and Sign In Button */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolledPastHero ? 'var(--primary)' : 'transparent',
          color: scrolledPastHero ? '#FFF' : 'var(--foreground)',
          boxShadow: scrolledPastHero ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
          transition: 'background-color 0.3s, color 0.3s',
          padding: '0 2rem',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Text-based Logo */}
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            <span style={{ color: scrolledPastHero ? '#FFF' : 'var(--primary)' }}>Common</span>
            <span style={{ color: scrolledPastHero ? '#FFF' : 'var(--secondary)' }}>Cater</span>
          </Typography>
          {/* Sign In Button */}
          <Box 
            sx={{
              display: 'flex',         // Use flexbox to position items in a row
              alignItems: 'center',     // Center vertically
              gap: '1rem', 
            }}
          >
            <Button
              variant="outlined"
              onClick={() => router.push('/gettingStarted/Catering/SignIn')}
              sx={{
                borderColor: scrolledPastHero ? '#FFF' : 'var(--primary)',
                color: scrolledPastHero ? 'var(--primary)':'#FFF' ,
                backgroundColor: scrolledPastHero ? '#fff':'var(--primary)' ,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'var(--secondary)',
                  color: '#fff',
                  borderColor:'var(--secondary)',
                },
              }}
            >
              Sign In
            </Button>
            <DropDown 
              items={[
                { label:'Sign In', path:'/gettingStarted/Caterer/SignIn' },
                { label:'Register', path:'/gettingStarted/Caterer/registry' }
              ]} 
              title="I'm a Caterer"
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section with Parallax Effect */}
      <Box
        id="hero-section"
        sx={{
          position: 'relative',
          minHeight: '80vh',
          color: '#FFF',
          textAlign: 'center',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url('https://flatironnomad.nyc/wp-content/uploads/2023/08/ilili-catering-header.jpg')`, // Replace with your image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Enables parallax effect
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay to make text pop
          }}
        />
        <Container maxWidth="md" sx={{ padding: '2rem', zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: '800',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            }}
          >
            Revolutionize Your Event Catering
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginBottom: '2rem',
              opacity: 0.9,
              fontWeight: '500',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            }}
          >
            Experience gourmet meals delivered right to your event with ease.
          </Typography>
          <Button
            variant="contained"
            onClick={() => router.push("/orderhub")}
            sx={{
              backgroundColor: 'var(--secondary)',
              color: '#000',
              fontSize: '1rem',
              padding: '0.75rem 2rem',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#E6BC27', // Consider defining this in your CSS variables if needed
              },
            }}
          >
            Explore Restaurants
          </Button>
          <Box sx={{ marginTop: '4rem' }}>
            <IconButton href="#about" sx={{ color: '#FFF' }}>
              <ArrowDownwardIcon fontSize="large" />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          padding: '4rem 2rem',
          backgroundColor: 'var(--background)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '1rem' }}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'var(--foreground)' }}>
            At{' '}
            <span style={{ color: 'var(--primary)' }}>Common</span>
            <span style={{ color: 'var(--secondary)' }}>Cater</span>, we strive to provide easy
            access to catering services for everyone. Our platform connects you with a
            variety of dining options to suit all occasions.
          </Typography>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          padding: '4rem 2rem',
          backgroundColor: '#F9F9F9',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              color: 'var(--primary)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            Why Choose CommonCater?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '1rem' }}
                  >
                    Wide Variety of Options
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'var(--foreground)' }}>
                    From gourmet meals to home-cooked favorites, we offer catering services
                    that fit every event and budget.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '1rem' }}
                  >
                    Easy to Use
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'var(--foreground)' }}>
                    Browse and book catering services with just a few clicks, ensuring a
                    seamless experience for both customers and vendors.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '1rem' }}
                  >
                    Affordable Prices
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'var(--foreground)' }}>
                    We work with local restaurants to offer competitive pricing, making
                    catering accessible to all.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section with Accordion */}
      <Box
        sx={{
          padding: '4rem 2rem',
          backgroundColor: 'var(--background)',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              color: 'var(--primary)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Frequently Asked Questions
          </Typography>
          {/* Accordion for FAQ */}
          <Accordion
            sx={{
              backgroundColor: 'var(--background)',
              marginBottom: '1rem',
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              '&::before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'var(--primary)' }} />}
            >
              <Typography
                variant="h6"
                sx={{ color: 'var(--primary)', fontWeight: 'bold' }}
              >
                What is CommonCater?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'var(--foreground)' }}>
                CommonCater is your gateway to accessible catering services from a wide
                range of restaurants. We make gourmet meals available to everyone.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: 'var(--background)',
              marginBottom: '1rem',
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              '&::before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'var(--primary)' }} />}
            >
              <Typography
                variant="h6"
                sx={{ color: 'var(--primary)', fontWeight: 'bold' }}
              >
                How do I join as a restaurant?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'var(--foreground)' }}>
                Restaurant owners can join CommonCater by visiting our "For Restaurants"
                page and completing the registration process.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          padding: '4rem 2rem',
          backgroundColor: 'var(--primary)',
          color: '#FFF',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            Ready to Experience Exceptional Catering?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '2rem', opacity: 0.9, color: 'var(--secondary)'}}>
            Sign up today and make your next event unforgettable.
          </Typography>
          <Button
            variant="contained"
            onClick={() => router.push('/gettingStarted/Catering/SignIn')}
            sx={{
              backgroundColor: 'var(--secondary)',
              color: '#000',
              fontSize: '1rem',
              padding: '0.75rem 2rem',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#E6BC27',
              },
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: '#F9F9F9',
          padding: '2rem',
          textAlign: 'center',
          borderTop: '1px solid #E0E0E0',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ marginBottom: '1rem' }}>
            <IconButton href="#" sx={{ color: 'var(--foreground)' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'var(--foreground)' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'var(--foreground)' }}>
              <InstagramIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ color: 'var(--foreground)' }}>
            © 2024 <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Common</span>
            <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Cater</span>. All
            Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}