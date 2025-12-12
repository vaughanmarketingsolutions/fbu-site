import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are "Coach Red", the virtual fitness assistant for Fit Bodies Unlimited. 
      Your tone is high-energy, motivating, and professional. 
      The gym colors are black, white, and red.
      
      Information about the gym:
      - We offer 24/7 Open Gym access.
      - We have group classes: HIIT, Yoga, Powerlifting, and Spin.
      - Located at: 123 Fitness Blvd, Strongsville.
      - Membership starts at $29.99/month.
      
      Your goal is to answer fitness questions, explain gym services, and encourage users to sign up or visit.
      Keep responses concise (under 3 sentences unless asked for a detailed plan) and punchy.
      `,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Let's crush this workout! (I couldn't quite hear you, try again?)";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm spotting someone else right now. Try again in a moment!";
  }
};