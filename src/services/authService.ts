import { api } from '@/lib/api';
import type { AuthResponse, User } from '@/types';

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', { email, password });
    api.setToken(response.token);
    return response;
  },

  async signup(email: string, password: string, name: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/signup', { email, password, name });
    api.setToken(response.token);
    return response;
  },

  async logout(): Promise<void> {
    api.setToken(null);
  },

  async getCurrentUser(): Promise<User> {
    return api.get<User>('/auth/me');
  },

  isAuthenticated(): boolean {
    return !!api.getToken();
  },
};
