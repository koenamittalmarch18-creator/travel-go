import { useCallback, useState } from 'react';

import { sendChatMessage } from '../services/chatService';
import type {
  ChatMessage,
  QuickAction,
} from '../types/chatbot.types';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback(
    (role: ChatMessage['role'], content: string) => {
      const newMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role,
        content,
        timestamp: Date.now(),
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        newMessage,
      ]);
    },
    [],
  );

  const sendMessage = useCallback(
    async (message: string) => {
      addMessage('user', message);

      setIsLoading(true);

      try {
        const response = await sendChatMessage(message);

        addMessage('assistant', response);
      } catch {
        addMessage(
          'assistant',
          'Sorry, something went wrong. Please try again.',
        );
      } finally {
        setIsLoading(false);
      }
    },
    [addMessage],
  );

  const handleQuickAction = useCallback(
    (action: QuickAction) => {
      void sendMessage(action.prompt);
    },
    [sendMessage],
  );

  return {
    messages,
    isLoading,
    sendMessage,
    handleQuickAction,
  };
}