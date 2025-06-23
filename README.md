# GiftLink - Full Stack Gift Recommendation Platform

A comprehensive full-stack web application that provides intelligent gift recommendations with sentiment analysis capabilities. Built as a capstone project for IBM Developer Skills Network, this platform combines modern web technologies with AI-powered sentiment analysis to help users find the perfect gifts.

## 🎯 Project Overview

GiftLink is a sophisticated gift recommendation platform that leverages sentiment analysis to provide personalized gift suggestions. The application features a complete full-stack architecture with a React frontend, Node.js/Express backend, MongoDB database, and a separate sentiment analysis microservice.

## ✨ Features

### 🎁 Gift Management System
- **Gift Catalog** - Comprehensive database of gift items with detailed information
- **Gift Search** - Advanced search functionality with filtering options
- **Gift Details** - Detailed product pages with specifications and recommendations
- **Gift Recommendations** - AI-powered personalized gift suggestions

### 🔍 Search & Discovery
- **Advanced Search** - Multi-criteria search functionality
- **Category Filtering** - Browse gifts by categories and preferences
- **Price Range Filtering** - Filter gifts by budget constraints
- **Real-time Search** - Instant search results with dynamic filtering

### 🧠 Sentiment Analysis
- **Text Analysis** - Natural language processing for sentiment detection
- **Sentiment Scoring** - Numerical sentiment scores for text input
- **Sentiment Classification** - Positive, negative, and neutral sentiment categorization
- **AI-Powered Insights** - Intelligent analysis using Natural.js library

### 👤 User Management
- **User Registration** - Secure account creation with validation
- **User Authentication** - JWT-based authentication system
- **User Profiles** - Personalized user profiles and preferences
- **Session Management** - Secure session handling

### 🎨 Modern UI/UX
- **Responsive Design** - Mobile-first responsive layout
- **Bootstrap Integration** - Professional styling with Bootstrap 5
- **React Components** - Modular, reusable component architecture
- **Intuitive Navigation** - User-friendly interface design

## 🛠️ Technologies Used

### Frontend Stack
- **React 18.2.0** - Modern JavaScript library for building user interfaces
- **React Router DOM 6.20.1** - Client-side routing for single-page applications
- **Bootstrap 5.3.2** - Responsive CSS framework
- **React Bootstrap 2.9.2** - Bootstrap components for React
- **React DatePicker 4.24.0** - Date selection components

### Backend Stack
- **Node.js** - JavaScript runtime environment
- **Express.js 4.18.2** - Fast, unopinionated web framework
- **MongoDB 6.8.0** - NoSQL database for data storage
- **JWT 9.0.2** - JSON Web Tokens for authentication
- **bcryptjs 2.4.3** - Password hashing and security

### Sentiment Analysis Service
- **Natural.js 6.10.4** - Natural language processing library
- **Express.js** - RESTful API for sentiment analysis
- **AFINN Lexicon** - Sentiment analysis lexicon for English

### Development Tools
- **Pino Logger** - High-performance logging
- **Express Validator** - Input validation and sanitization
- **CORS** - Cross-origin resource sharing
- **Docker** - Containerization support
- **Mocha & Chai** - Testing framework

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SametDulger/fullstack-capstone-project.git
   cd fullstack-capstone-project
   ```

2. **Install backend dependencies**
   ```bash
   cd giftlink-backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../giftlink-frontend
   npm install
   ```

4. **Install sentiment service dependencies**
   ```bash
   cd ../sentiment
   npm install
   ```

5. **Set up environment variables**
   Create `.env` files in each service directory with appropriate configuration.

6. **Start the services**
   ```bash
   # Start backend (Terminal 1)
   cd giftlink-backend
   npm run dev

   # Start frontend (Terminal 2)
   cd giftlink-frontend
   npm start

   # Start sentiment service (Terminal 3)
   cd sentiment
   npm start
   ```

7. **Access the application**
   - **Frontend**: `http://localhost:3000`
   - **Backend API**: `http://localhost:3060`
   - **Sentiment Service**: `http://localhost:3000`

## 📁 Project Structure

```
fullstack-capstone-project/
├── giftlink-backend/              # Backend API service
│   ├── routes/
│   │   ├── giftRoutes.js         # Gift management endpoints
│   │   ├── searchRoutes.js       # Search functionality
│   │   └── authRoutes.js         # Authentication endpoints
│   ├── models/
│   │   └── db.js                 # Database connection
│   ├── util/
│   │   └── import-mongo/         # Data import utilities
│   ├── app.js                    # Main application file
│   ├── logger.js                 # Logging configuration
│   ├── package.json              # Backend dependencies
│   └── Dockerfile                # Backend containerization
├── giftlink-frontend/            # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── MainPage/         # Home page component
│   │   │   ├── LoginPage/        # User login component
│   │   │   ├── RegisterPage/     # User registration component
│   │   │   ├── SearchPage/       # Search functionality
│   │   │   ├── DetailsPage/      # Product details component
│   │   │   ├── Profile/          # User profile component
│   │   │   └── Navbar/           # Navigation component
│   │   ├── context/              # React context providers
│   │   ├── App.js                # Main application component
│   │   └── config.js             # Configuration settings
│   ├── public/                   # Static assets
│   └── package.json              # Frontend dependencies
├── sentiment/                    # Sentiment analysis microservice
│   ├── index.js                  # Sentiment analysis API
│   └── package.json              # Sentiment service dependencies
├── giftwebsite/                  # Production build deployment
│   ├── index.js                  # Production server
│   ├── package.json              # Production dependencies
│   └── Dockerfile                # Production containerization
├── .github/                      # GitHub workflows and configurations
├── README.md                     # Project documentation
└── LICENSE                       # Apache 2.0 license
```

## 🔌 API Endpoints

### Gift Management

#### Get All Gifts
```http
GET /api/gifts
```

#### Get Gift by ID
```http
GET /api/gifts/:id
```

#### Add New Gift
```http
POST /api/gifts
Content-Type: application/json

{
  "name": "Gift Name",
  "description": "Gift Description",
  "price": 99.99,
  "category": "Electronics"
}
```

### Search Functionality

#### Search Gifts
```http
GET /api/search?query=keyword&category=electronics&minPrice=10&maxPrice=100
```

### Authentication

#### User Registration
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "user@example.com",
  "password": "securepassword"
}
```

#### User Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "user@example.com",
  "password": "securepassword"
}
```

### Sentiment Analysis

#### Analyze Sentiment
```http
POST /sentiment?sentence=This is a great gift!
```

**Response:**
```json
{
  "sentimentScore": 2.5,
  "sentiment": "positive"
}
```

## 📊 Data Models

### Gift Model
```javascript
{
  id: String,
  name: String,
  description: String,
  price: Number,
  category: String,
  imageUrl: String,
  tags: [String],
  rating: Number,
  reviews: [Review]
}
```

### User Model
```javascript
{
  username: String,
  password: String (hashed),
  email: String,
  profile: {
    preferences: [String],
    favoriteCategories: [String]
  }
}
```

### Sentiment Analysis Response
```javascript
{
  sentimentScore: Number,
  sentiment: "positive" | "negative" | "neutral"
}
```

## 🎮 How to Use

### 1. User Registration & Authentication
- **Register**: Create a new account with email and password
- **Login**: Access your personalized dashboard
- **Profile Management**: Update preferences and settings

### 2. Gift Discovery
- **Browse Catalog**: Explore available gifts by category
- **Search**: Use advanced search with filters
- **View Details**: Get comprehensive gift information

### 3. Sentiment Analysis
- **Text Input**: Enter text for sentiment analysis
- **Analysis Results**: Get sentiment score and classification
- **Integration**: Use sentiment data for gift recommendations

### 4. Gift Recommendations
- **Personalized Suggestions**: AI-powered gift recommendations
- **Category-based**: Browse gifts by interest categories
- **Price Filtering**: Filter by budget constraints

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/giftlink
JWT_SECRET=your_jwt_secret_key
PORT=3060
NODE_ENV=development
```

#### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:3060
REACT_APP_SENTIMENT_URL=http://localhost:3000
```

#### Sentiment Service (.env)
```env
PORT=3000
NODE_ENV=development
```

## 🧪 Testing

### Backend Testing
```bash
cd giftlink-backend
npm test
```

### Frontend Testing
```bash
cd giftlink-frontend
npm test
```

### API Testing
```bash
# Test gift endpoints
curl -X GET "http://localhost:3060/api/gifts"

# Test sentiment analysis
curl -X POST "http://localhost:3000/sentiment?sentence=This is amazing!"
```

## 🚀 Deployment

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up --build
```

### Manual Deployment
```bash
# Build frontend for production
cd giftlink-frontend
npm run build

# Start production servers
cd ../giftwebsite
npm start
```

### Environment Setup
- **Development**: Local MongoDB and services
- **Production**: MongoDB Atlas and cloud deployment
- **Staging**: Separate environment for testing

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow JavaScript/React best practices
- Use proper error handling
- Test all endpoints thoroughly
- Ensure responsive design
- Update documentation as needed

## 🔮 Future Enhancements

### Planned Features
- **Machine Learning Integration** - Advanced recommendation algorithms
- **Social Features** - Gift sharing and wishlists
- **Payment Integration** - Secure payment processing
- **Real-time Chat** - Customer support integration
- **Mobile App** - Native mobile application
- **Multi-language Support** - Internationalization

### Technical Improvements
- **GraphQL API** - More efficient data fetching
- **Redis Caching** - Performance optimization
- **Microservices Architecture** - Scalable service design
- **CI/CD Pipeline** - Automated deployment
- **Monitoring & Analytics** - Application insights
- **Security Enhancements** - Advanced security measures

## 📝 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **IBM Developer Skills Network** - Course materials and project structure
- **Natural.js Team** - Natural language processing library
- **React Team** - Modern frontend framework
- **Express.js Team** - Fast web framework
- **MongoDB Team** - NoSQL database solution

## 📚 Learning Resources

### Documentation
- [React Documentation](https://reactjs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Natural.js Documentation](https://naturalnode.github.io/natural/)

### Tutorials
- [Full Stack Development](https://developer.mozilla.org/en-US/docs/Learn)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)
- [React Best Practices](https://reactjs.org/docs/hooks-rules.html)

## 📞 Support

For questions, issues, or contributions:
- **Issues**: [GitHub Issues](https://github.com/SametDulger/fullstack-capstone-project/issues)
- **Discussions**: [GitHub Discussions](https://github.com/SametDulger/fullstack-capstone-project/discussions)

## 🌟 Key Highlights

### Modern Architecture
- **Microservices Design** - Scalable and maintainable architecture
- **RESTful APIs** - Standardized API design
- **Real-time Processing** - Dynamic sentiment analysis
- **Responsive Design** - Mobile-first approach

### AI Integration
- **Sentiment Analysis** - Natural language processing
- **Intelligent Recommendations** - AI-powered suggestions
- **Text Processing** - Advanced NLP capabilities
- **Machine Learning Ready** - Extensible AI framework

### Development Experience
- **Full Stack Development** - End-to-end application
- **Modern Technologies** - Latest web development stack
- **Comprehensive Testing** - Quality assurance
- **Production Ready** - Deployment and scaling capabilities

---

**Built with ❤️ using React, Node.js, MongoDB, and Natural.js**
