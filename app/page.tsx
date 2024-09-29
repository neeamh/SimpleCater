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
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
<<<<<<< Updated upstream

export default function HomePage() {
  return (
    <>
=======
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useRouter } from 'next/navigation';


// Import Google Fonts
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/montserrat';

// Import Head for SEO
import Head from 'next/head';

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
      const scrollPosition = window.scrollY + 80;
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

>>>>>>> Stashed changes
      {/* Top Bar with Text-based Logo and Sign In Button */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#FFFFFF',
          boxShadow: 'none',
          borderBottom: '1px solid #E0E0E0',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem' }}>
          {/* Text-based Logo */}
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            <span style={{ color: '#347928' }}>Common</span>
            <span style={{ color: '#FCCD2A' }}>Cater</span>
          </Typography>
          {/* Sign In Button */}
<<<<<<< Updated upstream
          <Button variant="outlined" sx={{ borderColor: '#347928', color: '#347928' }}>
=======
          <Button
            variant="contained"
            sx={{
              borderColor: scrolledPastHero ? 'var(--primary)' : '#FFF',
              color: scrolledPastHero ? 'var(--primary)' : '#FFF',
              textTransform: 'none',
              backgroundColor: scrolledPastHero ? '#FFF' : 'var(--primary)' ,
              '&:hover': {
                backgroundColor: 'var(--secondary-hover)',
                borderColor: scrolledPastHero ? '#FFF' : 'var(--primary)',
              },
            }}
            onClick={() => router.push('/SignIn')}
          >
>>>>>>> Stashed changes
            Sign In
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url('/path-to-your-hero-image.jpg')`, // Add a background image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          padding: '2rem',
          color: '#FFF',
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ marginBottom: '1rem' }}>
            Welcome to <span style={{ color: '#347928' }}>Common</span>
            <span style={{ color: '#FCCD2A' }}>Cater</span>
          </Typography>
          <Typography variant="h2" sx={{ marginBottom: '2rem' }}>
            Catering Services Made Accessible
          </Typography>
          <Button
            variant="contained"
<<<<<<< Updated upstream
            color="primary"
=======
            onClick={() => router.push('/orderhub')}
>>>>>>> Stashed changes
            sx={{
              backgroundColor: '#347928',
              fontSize: '1rem',
              color: '#FFFFFF',
              padding: '0.75rem 2rem',
            }}
          >
            Explore Restaurants
          </Button>
        </Container>
      </Box>

      {/* About Section with Background Image */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          backgroundImage: `url('/path-to-your-about-image.jpg')`, // Add a background image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFF',
          padding: '2rem',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ marginBottom: '1rem' }}>
            Who We Are
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            At CommonCater, we strive to provide easy access to catering services for everyone. Our platform connects you with a variety of dining options to suit all occasions.
          </Typography>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#FFFBE6',
          padding: '4rem',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ marginBottom: '2rem', color: '#347928' }}>
            Why Choose CommonCater?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ boxShadow: 'none', border: '1px solid #E0E0E0' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#347928' }}>
                    Wide Variety of Options
                  </Typography>
                  <Typography variant="body1">
                    From gourmet meals to home-cooked favorites, we offer catering services that fit every event and budget.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ boxShadow: 'none', border: '1px solid #E0E0E0' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#347928' }}>
                    Easy to Use
                  </Typography>
                  <Typography variant="body1">
                    Browse and book catering services with just a few clicks, ensuring a seamless experience for both customers and vendors.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ boxShadow: 'none', border: '1px solid #E0E0E0' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#347928' }}>
                    Affordable Prices
                  </Typography>
                  <Typography variant="body1">
                    We work with local restaurants to offer competitive pricing, making catering accessible to all.
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
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#FFF',
          padding: '2rem',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ marginBottom: '1rem', color: '#347928' }}>
            Frequently Asked Questions
          </Typography>
          {/* Accordion for FAQ */}
          <Accordion sx={{ backgroundColor: '#FFFFFF', marginBottom: '1rem', border: '1px solid #347928', borderRadius: '8px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#347928' }} />}>
              <Typography variant="h6" sx={{ color: '#347928' }}>What is CommonCater?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: '#3E3E3E' }}>
                CommonCater is your gateway to accessible catering services from a wide range of restaurants. We make gourmet meals available to everyone.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: '#FFFFFF', marginBottom: '1rem', border: '1px solid #347928', borderRadius: '8px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#347928' }} />}>
              <Typography variant="h6" sx={{ color: '#347928' }}>How do I join as a restaurant?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: '#3E3E3E' }}>
                Restaurant owners can join CommonCater by visiting our "For Restaurants" page and completing the registration process.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>

<<<<<<< Updated upstream
=======
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
          <Typography variant="body1" sx={{ marginBottom: '2rem', opacity: 0.9 }}>
            Sign up today and make your next event unforgettable.
          </Typography>
          <Button
            variant="contained"
            onClick={() => router.push('/SignIn')}
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

>>>>>>> Stashed changes
      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: '#F9F9F9',
          padding: '1rem',
          textAlign: 'center',
          borderTop: '1px solid #E0E0E0',
        }}
      >
        <Typography variant="body2" sx={{ color: '#3E3E3E' }}>
          © 2024 CommonCater. All Rights Reserved.
        </Typography>
      </Box>
<<<<<<< Updated upstream
    </>
=======
      </>

>>>>>>> Stashed changes
  );
}
