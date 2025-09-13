# Smart Crop Advisory System - Setup Guide

## Prerequisites

Before setting up the project, ensure you have the following installed:

### Required Software
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v5.0 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/downloads)
- **Python** (v3.8 or higher) - For ML models

### Optional Tools
- **MongoDB Compass** - GUI for MongoDB
- **Postman** - API testing
- **VS Code** - Code editor

## Installation Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd smart-crop-advisory
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env file with your configuration
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env file with your configuration
npm start
```

### 4. Database Setup
1. Start MongoDB service
2. Create database: `smart_crop_advisory`
3. Import seed data (if available)

## Environment Configuration

### Backend (.env)
- Configure MongoDB connection string
- Add API keys for weather services
- Set JWT secret
- Configure file upload settings

### Frontend (.env)
- Set API base URL
- Add Google Maps API key
- Configure Firebase for notifications

## Running the Application

1. Start MongoDB service
2. Run backend: `cd backend && npm run dev`
3. Run frontend: `cd frontend && npm start`
4. Access application at `http://localhost:3000`

## API Documentation

Backend API will be available at `http://localhost:5000`

### Main Endpoints:
- `/api/auth` - Authentication
- `/api/advisory` - Crop recommendations
- `/api/weather` - Weather data
- `/api/pests` - Pest detection
- `/api/market` - Market prices
- `/api/soil` - Soil analysis

## Troubleshooting

### Common Issues:

1. **Port conflicts**: Change PORT in .env files
2. **MongoDB connection**: Verify MongoDB is running
3. **API keys**: Ensure all required API keys are configured
4. **File uploads**: Check upload directory permissions

### Getting Help:
- Check console logs for error messages
- Verify environment variables
- Test API endpoints with Postman
- Review documentation in `/docs` folder

## Deployment

For production deployment:
1. Build frontend: `npm run build`
2. Set NODE_ENV=production
3. Configure production database
4. Set up reverse proxy (Nginx)
5. Configure SSL certificates

## Contributing

This is an SIH 2025 project. Follow the development guidelines in README.md when contributing.