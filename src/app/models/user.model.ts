export interface PersonalInfo {
  name: string;
  cpf: string;
  phone: string;
  birthDate?: string; // string ISO date opcional
}

export interface FinancialSettings {
  defaultCurrency: string; // ex: 'BRL'
  monthlyIncome: number;
  financialGoals: string[];
}

export interface UserPreferences {
  language: string; // ex: 'pt-BR'
  notifications: boolean;
  theme: string; // 'light' | 'dark'
  timeZone: string; // ex: 'America/Sao_Paulo'
}

export interface User {
  id: string; // corresponde ao _id do MongoDB
  email: string;
  passwordHash: string;
  refreshToken?: string;
  refreshTokenExpiry?: string; // ISO date
  personalInfo: PersonalInfo;
  financialSettings: FinancialSettings;
  preferences: UserPreferences;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  lastLogin?: string; // ISO date
  isActive: boolean;
}

export interface LoginRequest {
  username: string; // pode ser email ou username, depende da implementação
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
  expiresIn: number; // segundos
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}