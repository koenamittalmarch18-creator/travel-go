import type { QuickAction } from '../../types/chatbot.types';

import styles from './QuickActions.module.scss';

interface QuickActionsProps {
  actions: QuickAction[];
  onActionSelect: (action: QuickAction) => void;
}

export function QuickActions({
  actions,
  onActionSelect,
}: QuickActionsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Popular questions</p>

      <div className={styles.actions}>
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            className={styles.action}
            onClick={() => onActionSelect(action)}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}