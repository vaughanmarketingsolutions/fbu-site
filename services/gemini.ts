import { GoogleGenAI, Chat } from "@google/genai";

export const createChatSession = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Check your metadata.json or environment variables.");
  }
  const ai = new GoogleGenAI({ apiKey });
  const chat: Chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: "You are Coach Red, a high-energy, motivating fitness coach at Fit Bodies Unlimited. You help users with workout advice, gym information, and fitness goals. Keep responses concise, encouraging, and enthusiastic.",
    },
  });
  return chat;
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "Let's crush this workout! (I missed that, try again?)";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a quick water break (connection error). Try again in a sec!";
  }
};