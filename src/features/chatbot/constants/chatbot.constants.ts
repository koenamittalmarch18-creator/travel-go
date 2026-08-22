import type { QuickAction } from '../types/chatbot.types';

export const CHATBOT_TITLE = 'TravelGo Assistant';

export const CHATBOT_WELCOME_MESSAGE =
  "Hi! 👋 I'm your TravelGo Assistant. I can help you find the right trip, explore packages, and answer your travel questions.";

export const QUICK_ACTIONS: QuickAction[] = [
  {
    label: 'Find a trip',
    prompt: 'Help me find a trip',
  },
  {
    label: 'Trips under ₹15,000',
    prompt: 'Show me trips under ₹15,000',
  },
  {
    label: 'Plan my vacation',
    prompt: 'Help me plan my vacation',
  },
  {
    label: "What's included?",
    prompt: 'What is included in your travel packages?',
  },
];