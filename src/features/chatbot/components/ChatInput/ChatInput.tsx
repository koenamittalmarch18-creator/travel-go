import { Send } from 'lucide-react';
import { useState } from 'react';

import styles from './ChatInput.module.scss';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({
  onSend,
  disabled = false,
}: ChatInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    const message = value.trim();

    if (!message || disabled) {
      return;
    }

    onSend(message);
    setValue('');
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about trips, packages..."
        disabled={disabled}
        aria-label="Chat message"
      />

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!value.trim() || disabled}
        aria-label="Send message"
      >
        <Send size={17} />
      </button>
    </div>
  );
}