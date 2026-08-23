import { Bot, X } from 'lucide-react';

import styles from './ChatHeader.module.scss';

interface ChatHeaderProps {
  onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.identity}>
        <div className={styles.avatar} aria-hidden="true">
          <Bot size={20} />
        </div>

        <div className={styles.info}>
          <h2>TravelGo Assistant</h2>

          <span>
            <span className={styles.statusDot} />
            Online
          </span>
        </div>
      </div>

      <button
        type="button"
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close TravelGo Assistant"
      >
        <X size={20} />
      </button>
    </header>
  );
}