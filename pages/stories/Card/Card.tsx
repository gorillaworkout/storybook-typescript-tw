import React from 'react';


interface CardProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
    /**
   * Optional click handler
   */
    id?: number
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  id,
  ...props
}: CardProps) => {
  const mode = primary ? 'storybook-card--primary' : 'storybook-card--secondary';
  return (
    <div
      className={['storybook-card', `storybook-card--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        div {
          background-color: ${backgroundColor};
        }
      `}
      </style>
    </div>
  );
};
