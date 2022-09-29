import React from 'react';

import { UIComponent } from '../../../types/UIComponent';

const Subheading: React.FC<UIComponent> = ({ id, className, children }) => {
  return (
    <h1
      className={`text-2xl font-heading font-bold text-primaryGray ${className}`}
      id={id}
    >
      {children}
    </h1>
  );
};

export default Subheading;
