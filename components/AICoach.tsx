import React, { useState, useRef, useEffect } from 'react';
import { createChatSession, sendMessageToGemini } from '../services/gemini';
import { ChatMessage, ChatSender } from '../types';

const AICoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      text: "HEY THERE! I'm Coach Red. Ready to crush your goals? Ask me anything about our gym or your workout!",
      sender: ChatSender.BOT,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Use 'any' type for the chat session ref since we are using a mock service
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      chatSessionRef.current = createChatSession();
    } catch (e) {
      console.warn("AI Coach initialization failed:", e);
      // We continue without a session, handleSend will manage fallback
    }
  }, []);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: ChatSender.USER,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    if (chatSessionRef.current) {
      try {
        const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          sender: ChatSender.BOT,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMsg]);
      } catch (error) {
         setMessages(prev => [...prev, {
          id: 'error',
          text: "Coach Red is taking a breather (Network Error). Try again!",
          sender: ChatSender.BOT,
          timestamp: new Date()
        }]);
      }
    } else {
      // Fallback
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: 'error',
          text: "I'm currently offline (API Key Missing). But trust me, you look great today!",
          sender: ChatSender.BOT,
          timestamp: new Date()
        }]);
      }, 1000);
    }
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-brand-gray border border-zinc-800 rounded-lg shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden flex flex-col h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-red p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">AI</span>
              </div>
              <h3 className="font-bold text-white">Coach Red</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-zinc-900 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 text-sm ${
                    msg.sender === ChatSender.USER 
                      ? 'bg-white text-black font-medium' 
                      : 'bg-zinc-800 text-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 rounded-lg p-3 flex gap-1">
                  <span className="w-2 h-2 bg-brand-red rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-brand-red rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-brand-red rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-black border-t border-zinc-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about workouts..."
                className="flex-1 bg-zinc-900 text-white border border-zinc-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-red transition-colors"
              />
              <button 
                onClick={handleSend}
                className="bg-brand-red text-white p-2 rounded hover:bg-red-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          <span className="hidden group-hover:block text-sm font-bold uppercase tracking-wider pr-2">Ask Coach</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AICoach;