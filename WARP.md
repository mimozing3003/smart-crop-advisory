# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Initial Setup
```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies  
cd frontend && npm install

# Setup environment files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

### Running the Application
```bash
# Start backend development server (runs on port 5000)
cd backend && npm run dev

# Start frontend development server (runs on port 3000)
cd frontend && npm start

# Health check
curl http://localhost:5000/health
```

### Testing
```bash
# Run backend tests
cd backend && npm test

# Run frontend tests
cd frontend && npm test

# Run single test file
cd backend && npm test -- --testPathPattern=auth.test.js
cd frontend && npm test -- --testNamePattern="component name"
```

### Code Quality
```bash
# Lint backend code
cd backend && npm run lint

# Lint frontend code
cd frontend && npm run lint

# Format frontend code
cd frontend && npm run format
```

### Database Management
```bash
# Seed database with initial data
cd backend && npm run seed

# Start MongoDB locally
mongod --dbpath ./data/db
```

### Build and Deployment
```bash
# Build frontend for production
cd frontend && npm run build

# Analyze frontend bundle size
cd frontend && npm run analyze

# Start backend in production mode
cd backend && npm start
```

## Architecture Overview

### Project Structure
- **Monorepo**: Frontend (React) and Backend (Node.js) in separate directories
- **Backend**: Express.js REST API with MongoDB for data persistence
- **Frontend**: React SPA with Material-UI, i18n support, and PWA capabilities
- **Target Users**: Small and marginal farmers in India (multilingual, mobile-first)

### Key Backend Components
- **server.js**: Main Express application with security middleware (helmet, rate limiting, CORS)
- **routes/**: Modular API endpoints for specific features:
  - `auth.js` - JWT-based authentication
  - `advisory.js` - AI-powered crop recommendations
  - `pests.js` - Image-based pest/disease detection
  - `weather.js` - Weather alerts and forecasting
  - `market.js` - Real-time commodity price tracking
  - `soil.js` - Soil health analysis and recommendations
  - `upload.js` - File upload handling with image processing
- **config/database.js**: MongoDB connection management

### Key Frontend Components  
- **App.js**: Main React app with Material-UI theme, React Query, and i18n setup
- **Lazy Loading**: All pages are code-split for better performance
- **Theme**: Agriculture-focused green/orange color scheme with multilingual font support
- **PWA Ready**: Service worker configuration for offline functionality
- **Routing**: Protected and public routes for authenticated/guest users

### API Architecture
- **RESTful Design**: Standard HTTP methods with JSON responses
- **Security**: Helmet, CORS, rate limiting (100 requests/15 minutes)
- **Error Handling**: Global error middleware with environment-aware responses
- **Image Processing**: Sharp.js for image optimization and processing
- **Real-time Features**: Socket.io integration for live updates

### Database Schema (MongoDB)
- **Users**: Farmer profiles with location and preferences
- **Crops**: Crop types, varieties, and growing information
- **Advisory**: Personalized recommendations and history
- **Weather**: Location-based weather data and alerts
- **Market**: Commodity pricing and trends
- **Soil**: Soil test results and health assessments

## Development Guidelines

### SIH 2025 Context
This is a Smart India Hackathon 2025 project (Problem Statement ID: 25010) for the Government of Punjab, focusing on Agriculture, FoodTech & Rural Development. The system targets 146+ million small and marginal farmers in India.

### Multilingual Requirements
- **Primary Languages**: Hindi, Punjabi, English
- **Implementation**: i18next with browser language detection
- **Font Support**: Roboto + Noto Sans Devanagari for Indian languages
- All user-facing text must be internationalized

### Mobile-First Design
- **Responsive**: Material-UI breakpoints for mobile optimization
- **Performance**: Optimized for low-bandwidth rural internet connections
- **PWA Features**: Offline functionality for basic features
- **Image Optimization**: Sharp.js for efficient image processing

### API Integration Patterns
- **External APIs**: OpenWeatherMap, commodity price APIs, Google Maps
- **Data Caching**: Redis for frequently accessed data
- **Image Storage**: AWS S3 with local development fallback
- **Error Resilience**: Graceful degradation when external APIs fail

### Authentication Flow
- **JWT Tokens**: 24-hour expiration with refresh capabilities
- **User Types**: Farmers, extension officers, administrators
- **Protected Routes**: Dashboard and advisory features require authentication
- **Security**: bcrypt password hashing with 12 rounds

### File Upload Handling
- **Image Types**: JPEG, PNG, WebP for pest detection
- **Size Limits**: 10MB maximum upload size
- **Processing**: Automatic image optimization and resizing
- **Storage**: Local development, S3 for production

## Environment Configuration

### Required Backend Variables
- `MONGODB_URI`: Database connection string
- `JWT_SECRET`: Token signing key
- `OPENWEATHER_API_KEY`: Weather data integration
- `GOOGLE_MAPS_API_KEY`: Location services
- `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY`: File storage

### Required Frontend Variables  
- `REACT_APP_API_URL`: Backend API endpoint
- `REACT_APP_GOOGLE_MAPS_API_KEY`: Maps integration
- `REACT_APP_FIREBASE_*`: Push notification configuration

### Feature Flags
- `REACT_APP_ENABLE_VOICE_SUPPORT`: Voice guidance for low-literate users
- `REACT_APP_ENABLE_OFFLINE_MODE`: Service worker offline capabilities
- `REACT_APP_ENABLE_CAMERA_DETECTION`: Image-based pest detection

## API Endpoints Reference

### Core Features
- `POST /api/auth/login` - User authentication
- `GET /api/advisory/recommendations` - Get personalized crop advice
- `POST /api/pests/detect` - Upload image for pest identification
- `GET /api/weather/alerts` - Location-based weather warnings
- `GET /api/market/prices` - Real-time commodity prices
- `POST /api/soil/analyze` - Submit soil test results

### Utility Endpoints
- `GET /health` - Application health check
- `POST /api/upload` - File upload endpoint
- `GET /api/crops` - Available crop types and varieties

## Common Development Patterns

### Error Handling
- Backend returns consistent JSON error format
- Frontend uses React Query for API state management
- Global error boundaries for unhandled exceptions

### Image Processing Workflow
1. Upload via `/api/upload` endpoint
2. Sharp.js processes and optimizes images
3. Store in S3 or local storage
4. Return processed image URL for frontend display

### Multilingual Content Management
- Translation keys in JSON format
- Dynamic language switching without page reload  
- Date/number formatting based on user locale

### Real-time Updates
- Socket.io for weather alerts and market price changes
- React Query background refetch for data synchronization
- Push notifications via Firebase for critical alerts