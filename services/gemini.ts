// Mock service to replace @google/genai functionality
// This ensures the app builds without the dependency while keeping the UI intact.

export const createChatSession = () => {
  // Return a dummy object representing the chat session
  return {
    id: 'mock-session',
    history: []
  };
};

export const sendMessageToGemini = async (chat: any, message: string): Promise<string> => {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return a fallback response since the AI is removed
  return "I am currently undergoing system maintenance to upgrade my workout algorithms. Please check the Class Schedule page for immediate information, or ask a staff member at the front desk!";
};