import React from 'react';

import { UIComponent } from '../../../types/UIComponent';

const Text: React.FC<UIComponent> = ({ id, className, children }) => {
  return (
    <p className={`text-lg font-text text-primaryGray ${className}`} id={id}>
      {children}
    </p>
  );
};

export default Text;
