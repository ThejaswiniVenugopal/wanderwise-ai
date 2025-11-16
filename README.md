# TravelAI - React Frontend

A modern travel planning application built with React, TypeScript, and Tailwind CSS. This frontend connects to your external MongoDB + Node.js + Express backend.

## Features

- 🔐 **User Authentication** - Secure login and signup
- ✈️ **Trip Management** - Create, view, and manage your trips
- 🤖 **AI Chat Assistant** - Get personalized travel advice
- 🗺️ **Map View** - Explore destinations visually
- 📅 **AI-Generated Itineraries** - Custom day-by-day travel plans
- 🎨 **Beautiful UI** - Ocean blue and sunset orange theme

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router
- React Hook Form
- Shadcn/ui components
- React Query

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Configure environment variables:**
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
```
Update the URL to point to your backend server.

3. **Start development server:**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Backend Requirements

Your MongoDB + Node.js + Express backend must implement the following endpoints:

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (requires auth token)

### Trips
- `GET /api/trips` - Get all user trips
- `GET /api/trips/:id` - Get specific trip
- `POST /api/trips` - Create new trip
- `PUT /api/trips/:id` - Update trip
- `DELETE /api/trips/:id` - Delete trip

### AI Features
- `POST /api/ai/chat` - Chat with AI assistant
- `POST /api/ai/generate-itinerary` - Generate trip itinerary

See `BACKEND_API.md` for detailed API specifications and MongoDB schema examples.

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Shadcn UI components
│   ├── Navbar.tsx     # Navigation bar
│   └── ProtectedRoute.tsx
├── contexts/          # React contexts
│   └── AuthContext.tsx
├── pages/             # Page components
│   ├── Index.tsx      # Landing page
│   ├── Auth.tsx       # Login/Signup
│   ├── Trips.tsx      # Trip management
│   ├── Chat.tsx       # AI chat assistant
│   └── MapView.tsx    # Map exploration
├── services/          # API service layers
│   ├── authService.ts
│   ├── tripService.ts
│   └── aiService.ts
├── types/             # TypeScript types
│   └── index.ts
├── lib/               # Utilities
│   ├── api.ts         # API client
│   └── utils.ts
└── App.tsx            # Main app component
```

## Authentication Flow

1. User signs up or logs in via `/auth` page
2. Backend returns JWT token
3. Token is stored in localStorage
4. Token is sent in `Authorization` header for protected endpoints
5. User is redirected to dashboard

## API Client

The API client (`src/lib/api.ts`) handles:
- Authentication token management
- Request/response formatting
- Error handling
- Automatic header injection

## Development Notes

- All colors use HSL values from the design system (ocean blues, sunset oranges)
- Protected routes automatically redirect to login if not authenticated
- Toast notifications for user feedback
- Responsive design with Tailwind CSS

## Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Deployment

Deploy the `dist/` folder to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages



Don't forget to update `VITE_API_URL` to your production backend URL.

## Next Steps

1. Set up your MongoDB + Node.js + Express backend using the API specification in `BACKEND_API.md`
2. Update `.env` with your backend URL
3. Implement the AI features using OpenAI, Google Gemini, or similar
4. Add map integration (Google Maps, Mapbox, etc.) in `MapView.tsx`
5. Customize the design and add more features as needed



