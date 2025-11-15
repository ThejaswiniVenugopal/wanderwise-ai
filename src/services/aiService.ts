import { api } from '@/lib/api';
import type { ChatMessage, Itinerary } from '@/types';

export const aiService = {
  async chat(messages: ChatMessage[]): Promise<string> {
    const response = await api.post<{ message: string }>('/ai/chat', { messages });
    return response.message;
  },

  async generateItinerary(destination: string, days: number, preferences?: string): Promise<Itinerary[]> {
    return api.post<Itinerary[]>('/ai/generate-itinerary', {
      destination,
      days,
      preferences,
    });
  },
};
