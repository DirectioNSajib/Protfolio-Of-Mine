import React from 'react';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'orange' | 'default';
  interactive?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'default',
  interactive = false,
  onClick,
  style
}) => {
  const cardTypeClass = interactive
    ? glowColor === 'orange'
      ? 'glass-aws-interactive'
      : 'glass-interactive'
    : 'glass';

  const combinedClassNames = `${styles.card} ${cardTypeClass} ${interactive ? styles.isInteractive : ''} ${className}`;

  return (
    <div className={combinedClassNames} onClick={onClick} style={style}>
      {children}
    </div>
  );
};
export default GlassCard;
