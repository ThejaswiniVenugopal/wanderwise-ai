import { api } from '@/lib/api';
import type { Trip } from '@/types';

export const tripService = {
  async getTrips(): Promise<Trip[]> {
    return api.get<Trip[]>('/trips');
  },

  async getTripById(id: string): Promise<Trip> {
    return api.get<Trip>(`/trips/${id}`);
  },

  async createTrip(tripData: Partial<Trip>): Promise<Trip> {
    return api.post<Trip>('/trips', tripData);
  },

  async updateTrip(id: string, tripData: Partial<Trip>): Promise<Trip> {
    return api.put<Trip>(`/trips/${id}`, tripData);
  },

  async deleteTrip(id: string): Promise<void> {
    return api.delete(`/trips/${id}`);
  },
};
