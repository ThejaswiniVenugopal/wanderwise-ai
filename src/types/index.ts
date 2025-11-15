export interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface Trip {
  _id: string;
  userId: string;
  destination: string;
  startDate: string;
  endDate: string;
  description?: string;
  budget?: number;
  activities?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Itinerary {
  _id: string;
  tripId: string;
  day: number;
  activities: ItineraryActivity[];
  createdAt: string;
}

export interface ItineraryActivity {
  time: string;
  title: string;
  description: string;
  location?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface Destination {
  name: string;
  country: string;
  lat: number;
  lng: number;
  description?: string;
  imageUrl?: string;
}
