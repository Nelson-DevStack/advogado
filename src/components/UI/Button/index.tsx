import React from 'react';

import { UIComponent } from '../../../types/UIComponent';

type ButtonType = {
  isLink: boolean;
  href?: string;
  onClick?: () => void | ((newState: unknown) => void);
};

const Button: React.FC<UIComponent & ButtonType> = ({
  id,
  className,
  children,
  isLink,
  href,
  onClick,
}) => {
  const buttonStyle = `text-lg font-text text-primaryGray p-2 rounded-md`;

  return isLink ? (
    <a
      className={`${buttonStyle} ${className}`}
      id={id}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <button className={`${buttonStyle} ${className}`} id={id} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
