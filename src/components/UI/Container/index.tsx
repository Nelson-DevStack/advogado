import React from 'react';

import { UIComponent } from '../../../types/UIComponent';

const Container: React.FC<UIComponent> = ({ id, className, children }) => {
  return (
    <div
      className={`container mx-auto w-full px-4 md:px-8 ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Container;
