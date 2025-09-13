import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32', // Green primary color for agriculture theme
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF9800', // Orange secondary color
      light: '#FFB74D',
      dark: '#F57C00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans Devanagari", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

// Create Query Client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Simple Home component for initial deployment
const Home = () => (
  <Container maxWidth="lg" sx={{ py: 4 }}>
    <Box textAlign="center" mb={4}>
      <Typography variant="h1" component="h1" gutterBottom>
        🌾 Smart Crop Advisory System
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        AI-powered agricultural guidance for small and marginal farmers
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        SIH 2025 - Problem Statement ID: 25010
      </Typography>
    </Box>
    
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={3} mb={4}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>🌱 Crop Advisory</Typography>
          <Typography variant="body2">Get real-time, personalized crop recommendations based on soil type, weather, and crop history.</Typography>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>🦠 Pest Detection</Typography>
          <Typography variant="body2">AI-powered image recognition for crop disease diagnosis and treatment recommendations.</Typography>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>🌤️ Weather Alerts</Typography>
          <Typography variant="body2">Predictive weather insights and timely alerts for better farming decisions.</Typography>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>📈 Market Prices</Typography>
          <Typography variant="body2">Real-time commodity prices and market trends for informed selling decisions.</Typography>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>🌍 Soil Health</Typography>
          <Typography variant="body2">Comprehensive soil analysis and fertilizer guidance for sustainable farming.</Typography>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>🗣️ Multilingual</Typography>
          <Typography variant="body2">Available in Hindi, Punjabi, and English with voice support for low-literate users.</Typography>
        </CardContent>
      </Card>
    </Box>
    
    <Box textAlign="center">
      <Typography variant="h6" gutterBottom>
        Empowering 146+ Million Farmers Across India
      </Typography>
      <Button variant="contained" size="large" sx={{ mt: 2, mr: 2 }}>
        Get Started
      </Button>
      <Button variant="outlined" size="large" sx={{ mt: 2 }}>
        Learn More
      </Button>
    </Box>
    
    <Box mt={6} textAlign="center">
      <Typography variant="body2" color="text.secondary">
        Government of Punjab | Department of Higher Education<br/>
        Category: Software | Theme: Agriculture, FoodTech & Rural Development
      </Typography>
    </Box>
  </Container>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="App">
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={
                  <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h4" gutterBottom>404 - Page Not Found</Typography>
                    <Typography variant="body1" color="text.secondary">
                      The page you're looking for doesn't exist.
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2 }} href="/">
                      Go Home
                    </Button>
                  </Container>
                } />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;