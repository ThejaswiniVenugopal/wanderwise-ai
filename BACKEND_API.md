# Backend API Endpoints

This document outlines the API endpoints your MongoDB + Node.js + Express backend should implement.

## Base URL
All endpoints should be prefixed with `/api`

---

## Authentication Endpoints

### POST /auth/signup
Create a new user account

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword",
  "name": "John Doe"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### POST /auth/login
Login existing user

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET /auth/me
Get current authenticated user
**Headers:** `Authorization: Bearer {token}`

**Response:**
```json
{
  "_id": "user_id",
  "email": "user@example.com",
  "name": "John Doe",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

---

## Trip Endpoints

### GET /trips
Get all trips for authenticated user
**Headers:** `Authorization: Bearer {token}`

**Response:**
```json
[
  {
    "_id": "trip_id",
    "userId": "user_id",
    "destination": "Paris",
    "startDate": "2024-06-01",
    "endDate": "2024-06-10",
    "description": "Summer vacation",
    "budget": 3000,
    "activities": ["Eiffel Tower", "Louvre Museum"],
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### GET /trips/:id
Get specific trip by ID
**Headers:** `Authorization: Bearer {token}`

**Response:** Same as single trip object above

### POST /trips
Create new trip
**Headers:** `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "destination": "Paris",
  "startDate": "2024-06-01",
  "endDate": "2024-06-10",
  "description": "Summer vacation",
  "budget": 3000,
  "activities": ["Eiffel Tower", "Louvre Museum"]
}
```

**Response:** Created trip object

### PUT /trips/:id
Update existing trip
**Headers:** `Authorization: Bearer {token}`

**Request Body:** Partial trip object with fields to update

**Response:** Updated trip object

### DELETE /trips/:id
Delete trip
**Headers:** `Authorization: Bearer {token}`

**Response:**
```json
{
  "message": "Trip deleted successfully"
}
```

---

## AI Endpoints

### POST /ai/chat
Chat with AI assistant
**Headers:** `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "What are the best places to visit in Paris?",
      "timestamp": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

**Response:**
```json
{
  "message": "Paris offers many wonderful attractions including..."
}
```

### POST /ai/generate-itinerary
Generate AI itinerary for a trip
**Headers:** `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "destination": "Paris",
  "days": 5,
  "preferences": "museums, food, architecture"
}
```

**Response:**
```json
[
  {
    "_id": "itinerary_id",
    "tripId": "trip_id",
    "day": 1,
    "activities": [
      {
        "time": "09:00",
        "title": "Visit Eiffel Tower",
        "description": "Start your day with the iconic landmark",
        "location": "Champ de Mars"
      }
    ],
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

---

## MongoDB Schema Examples

### User Schema
```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}
```

### Trip Schema
```javascript
{
  userId: { type: ObjectId, ref: 'User', required: true },
  destination: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  description: { type: String },
  budget: { type: Number },
  activities: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Itinerary Schema
```javascript
{
  tripId: { type: ObjectId, ref: 'Trip', required: true },
  day: { type: Number, required: true },
  activities: [{
    time: String,
    title: String,
    description: String,
    location: String
  }],
  createdAt: { type: Date, default: Date.now }
}
```

---

## Error Responses

All endpoints should return appropriate HTTP status codes and error messages:

```json
{
  "error": "Error message here",
  "message": "Detailed error description"
}
```

Common status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error
