import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography, Box, Card, CardContent, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

// Home component with functional navigation
const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
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
        <Card sx={{ cursor: 'pointer', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }} onClick={() => navigate('/crop-advisory')}>
          <CardContent>
            <Typography variant="h6" gutterBottom>🌱 Crop Advisory</Typography>
            <Typography variant="body2">Get real-time, personalized crop recommendations based on soil type, weather, and crop history.</Typography>
          </CardContent>
        </Card>
        
        <Card sx={{ cursor: 'pointer', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }} onClick={() => navigate('/pest-detection')}>
          <CardContent>
            <Typography variant="h6" gutterBottom>🦠 Pest Detection</Typography>
            <Typography variant="body2">AI-powered image recognition for crop disease diagnosis and treatment recommendations.</Typography>
          </CardContent>
        </Card>
        
        <Card sx={{ cursor: 'pointer', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }} onClick={() => navigate('/weather-alerts')}>
          <CardContent>
            <Typography variant="h6" gutterBottom>🌤️ Weather Alerts</Typography>
            <Typography variant="body2">Predictive weather insights and timely alerts for better farming decisions.</Typography>
          </CardContent>
        </Card>
        
        <Card sx={{ cursor: 'pointer', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }} onClick={() => navigate('/market-prices')}>
          <CardContent>
            <Typography variant="h6" gutterBottom>📈 Market Prices</Typography>
            <Typography variant="body2">Real-time commodity prices and market trends for informed selling decisions.</Typography>
          </CardContent>
        </Card>
        
        <Card sx={{ cursor: 'pointer', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }} onClick={() => navigate('/soil-health')}>
          <CardContent>
            <Typography variant="h6" gutterBottom>🌍 Soil Health</Typography>
            <Typography variant="body2">Comprehensive soil analysis and fertilizer guidance for sustainable farming.</Typography>
          </CardContent>
        </Card>
        
        <Card sx={{ cursor: 'pointer', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }} onClick={() => navigate('/about')}>
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
        <Button variant="contained" size="large" sx={{ mt: 2, mr: 2 }} onClick={handleGetStarted}>
          Get Started
        </Button>
        <Button variant="outlined" size="large" sx={{ mt: 2 }} onClick={handleLearnMore}>
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
};

// Dashboard component
const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate('/')}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            🌾 Smart Crop Advisory Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Your Farm Management Dashboard
        </Typography>
        
        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={3} mt={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h2">🌱</Typography>
              <Typography variant="h6" gutterBottom>Crop Advisory</Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Get personalized recommendations for your crops based on current conditions.
              </Typography>
              <Button variant="contained" onClick={() => navigate('/crop-advisory')}>
                View Recommendations
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h2">🦠</Typography>
              <Typography variant="h6" gutterBottom>Pest Detection</Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Upload crop images for AI-powered pest and disease identification.
              </Typography>
              <Button variant="contained" onClick={() => navigate('/pest-detection')}>
                Upload Image
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h2">🌤️</Typography>
              <Typography variant="h6" gutterBottom>Weather Alerts</Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Stay updated with weather forecasts and farming alerts.
              </Typography>
              <Button variant="contained" onClick={() => navigate('/weather-alerts')}>
                View Weather
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h2">📈</Typography>
              <Typography variant="h6" gutterBottom>Market Prices</Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Track real-time commodity prices and market trends.
              </Typography>
              <Button variant="contained" onClick={() => navigate('/market-prices')}>
                View Prices
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h2">🌍</Typography>
              <Typography variant="h6" gutterBottom>Soil Health</Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Analyze soil conditions and get fertilizer recommendations.
              </Typography>
              <Button variant="contained" onClick={() => navigate('/soil-health')}>
                Analyze Soil
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h2">📊</Typography>
              <Typography variant="h6" gutterBottom>Farm Analytics</Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                View detailed reports and analytics of your farming activities.
              </Typography>
              <Button variant="contained">
                View Reports
              </Button>
            </CardContent>
          </Card>
        </Box>
        
        <Box mt={6} p={3} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>🎯 Quick Tips for Today</Typography>
          <Typography variant="body2" paragraph>
            • Check weather forecast before planning field activities
          </Typography>
          <Typography variant="body2" paragraph>
            • Monitor crop growth stages for optimal fertilizer application
          </Typography>
          <Typography variant="body2">
            • Keep track of market prices for better selling decisions
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

// Feature pages
const FeaturePage = ({ title, icon, description, comingSoon = false }) => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate('/dashboard')}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {icon} {title}
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md" sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontSize: '4rem', mb: 2 }}>{icon}</Typography>
        <Typography variant="h3" gutterBottom>{title}</Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.2rem' }}>
          {description}
        </Typography>
        
        {comingSoon ? (
          <Box sx={{ mt: 4, p: 3, backgroundColor: '#fff3cd', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>🚧 Coming Soon</Typography>
            <Typography variant="body1" color="text.secondary">
              This feature is currently under development and will be available soon.
              Our team is working hard to bring you the best agricultural advisory experience.
            </Typography>
            <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate('/dashboard')}>
              Back to Dashboard
            </Button>
          </Box>
        ) : (
          <Button variant="contained" size="large" sx={{ mt: 3 }} onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </Button>
        )}
      </Container>
    </Box>
  );
};

// About/Learn More page
const AboutPage = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate('/')}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            📚 About Smart Crop Advisory
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom textAlign="center">
          🌾 Smart Crop Advisory System
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
          The Smart Crop Advisory System is an innovative AI-powered platform developed for 
          Smart India Hackathon 2025, specifically designed to empower small and marginal 
          farmers across India with scientific agricultural guidance.
        </Typography>
        
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>🎯 Our Mission</Typography>
          <Typography variant="body1" paragraph>
            To bridge the gap between traditional farming knowledge and modern agricultural 
            science, making expert farming advice accessible to every farmer in their native language.
          </Typography>
        </Box>
        
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>🔧 Key Features</Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Typography component="li" variant="body1" paragraph>
              <strong>Real-time Crop Advisory:</strong> Location-specific recommendations based on soil, weather, and crop history
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>AI Pest Detection:</strong> Image-based identification of crop diseases and pests
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>Weather Intelligence:</strong> Predictive weather insights and farming alerts
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>Market Integration:</strong> Real-time commodity prices and demand forecasting
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>Multilingual Support:</strong> Available in Hindi, Punjabi, English with voice assistance
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ my: 4, p: 3, backgroundColor: '#e8f5e8', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>📈 Expected Impact</Typography>
          <Typography variant="body1">
            • 20-30% increase in crop yield through scientific advisory<br/>
            • Reduced input costs through optimized resource use<br/>
            • Enhanced food security and farmer livelihoods<br/>
            • Promotion of sustainable farming practices
          </Typography>
        </Box>
        
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary" paragraph>
            <strong>Government of Punjab</strong><br/>
            Department of Higher Education<br/>
            SIH 2025 - Problem Statement ID: 25010
          </Typography>
          <Button variant="contained" onClick={() => navigate('/dashboard')}>
            Explore Dashboard
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="App">
            <main>
              <Routes>
                {/* Home page */}
                <Route path="/" element={<Home />} />
                
                {/* Dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* About page */}
                <Route path="/about" element={<AboutPage />} />
                
                {/* Feature pages */}
                <Route path="/crop-advisory" element={
                  <FeaturePage 
                    title="Crop Advisory" 
                    icon="🌱" 
                    description="Get personalized, real-time crop recommendations based on your location, soil conditions, weather patterns, and crop history. Our AI analyzes multiple factors to provide scientifically-backed farming advice."
                    comingSoon={true}
                  />
                } />
                
                <Route path="/pest-detection" element={
                  <FeaturePage 
                    title="Pest Detection" 
                    icon="🦠" 
                    description="Upload photos of your crops to identify pests, diseases, and nutrient deficiencies using advanced AI image recognition. Get instant treatment recommendations and preventive measures."
                    comingSoon={true}
                  />
                } />
                
                <Route path="/weather-alerts" element={
                  <FeaturePage 
                    title="Weather Alerts" 
                    icon="🌤️" 
                    description="Stay ahead of weather changes with predictive insights, severe weather warnings, and farming-specific alerts. Plan your agricultural activities with confidence."
                    comingSoon={true}
                  />
                } />
                
                <Route path="/market-prices" element={
                  <FeaturePage 
                    title="Market Prices" 
                    icon="📈" 
                    description="Track real-time commodity prices, market trends, and demand forecasts. Make informed decisions about when and where to sell your crops for maximum profit."
                    comingSoon={true}
                  />
                } />
                
                <Route path="/soil-health" element={
                  <FeaturePage 
                    title="Soil Health Analysis" 
                    icon="🌍" 
                    description="Analyze your soil conditions, nutrient levels, and pH balance. Get personalized fertilizer recommendations and soil improvement strategies for optimal crop growth."
                    comingSoon={true}
                  />
                } />
                
                {/* 404 page */}
                <Route path="*" element={
                  <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h2" sx={{ fontSize: '4rem', mb: 2 }}>🤔</Typography>
                    <Typography variant="h4" gutterBottom>404 - Page Not Found</Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      The page you're looking for doesn't exist or may have been moved.
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2, mr: 2 }} onClick={() => window.location.href = '/'}>
                      Go Home
                    </Button>
                    <Button variant="outlined" sx={{ mt: 2 }} onClick={() => window.location.href = '/dashboard'}>
                      Dashboard
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