import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Fix: Follow @google/genai guidelines for client initialization and model selection
export const createChatSession = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Check your metadata.json or environment variables.");
  }
  
  // Rule: Must use new GoogleGenAI({ apiKey: process.env.API_KEY })
  const ai = new GoogleGenAI({ apiKey: apiKey });
  
  // Rule: Use recommended model for basic text tasks (Summarization, Q&A)
  const chat: Chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are Coach Red, a high-energy, motivating fitness coach at Fit Bodies Unlimited. You help users with workout advice, gym information, and fitness goals. Keep responses concise, encouraging, and enthusiastic.",
    },
  });
  return chat;
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    // Rule: Access response.text directly (do not call as a function)
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Let's crush this workout! (I missed that, try again?)";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a quick water break (connection error). Try again in a sec!";
  }
};