import React from 'react';

export type UIComponent = {
  id?: string;
  children: React.ReactNode | JSX.Element;
  className?: string;
};
