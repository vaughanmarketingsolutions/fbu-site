export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  fullBio?: string[]; // Array of paragraphs
  certifications?: string[];
}

export interface ClassSession {
  id: string;
  title: string;
  time: string;
  trainer: string;
  duration: string;
  intensity: 'Low' | 'Medium' | 'High';
}

export interface DaySchedule {
  day: string;
  classes: ClassSession[];
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}