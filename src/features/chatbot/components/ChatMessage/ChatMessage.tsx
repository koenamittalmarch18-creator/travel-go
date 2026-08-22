import { Bot, User } from 'lucide-react';

import type { ChatMessage as ChatMessageType } from '../../types/chatbot.types';

import styles from './ChatMessage.module.scss';

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`${styles.messageRow} ${
        isUser ? styles.userRow : styles.assistantRow
      }`}
    >
      {!isUser && (
        <div className={styles.avatar} aria-hidden="true">
          <Bot size={15} />
        </div>
      )}

      <div
        className={`${styles.messageBubble} ${
          isUser ? styles.userBubble : styles.assistantBubble
        }`}
      >
        {message.content}
      </div>

      {isUser && (
        <div className={styles.avatar} aria-hidden="true">
          <User size={15} />
        </div>
      )}
    </div>
  );
}