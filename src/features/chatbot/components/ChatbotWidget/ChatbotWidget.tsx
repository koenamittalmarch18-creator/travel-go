import { MessageCircle, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import {
  CHATBOT_WELCOME_MESSAGE,
  QUICK_ACTIONS,
} from '../../constants/chatbot.constants';
import { useChat } from '../../hooks/useChat';
import type { ChatMessage } from '../../types/chatbot.types';
import { ChatHeader } from '../ChatHeader/ChatHeader';
import { ChatInput } from '../ChatInput/ChatInput';
import { ChatMessage as ChatMessageItem } from '../ChatMessage/ChatMessage';
import { QuickActions } from '../QuickActions/QuickActions';

import styles from './ChatbotWidget.module.scss';

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    messages,
    isLoading,
    sendMessage,
    handleQuickAction,
  } = useChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages, isLoading]);

  const displayedMessages: ChatMessage[] =
    messages.length > 0
      ? messages
      : [
          {
            id: 'welcome',
            role: 'assistant',
            content: CHATBOT_WELCOME_MESSAGE,
            timestamp: Date.now(),
          },
        ];

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          className={styles.floatingButton}
          onClick={() => setIsOpen(true)}
          aria-label="Open TravelGo Assistant"
        >
          <Sparkles size={21} />

          <span>Ask TravelGo AI</span>
        </button>
      )}

      {isOpen && (
        <section
          className={styles.chatWindow}
          aria-label="TravelGo Assistant"
        >
          <ChatHeader onClose={() => setIsOpen(false)} />

          <div className={styles.messages}>
            {displayedMessages.map((message) => (
              <ChatMessageItem
                key={message.id}
                message={message}
              />
            ))}

            {messages.length === 0 && (
              <QuickActions
                actions={QUICK_ACTIONS}
                onActionSelect={handleQuickAction}
              />
            )}

            {isLoading && (
              <div className={styles.typing}>
                <span />
                <span />
                <span />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <ChatInput
            onSend={sendMessage}
            disabled={isLoading}
          />
        </section>
      )}

      {!isOpen && (
        <div className={styles.mobileIcon}>
          <MessageCircle size={20} />
        </div>
      )}
    </>
  );
}