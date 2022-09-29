import React, { useCallback, useEffect, useState } from 'react';

interface IScrollValue {
  scrollY: number;
}

type ScrollContext = {
  children: React.ReactNode | JSX.Element;
};

export const ScrollContext = React.createContext<IScrollValue>({
  scrollY: 0,
});

const ScrollObserver = ({ children }: ScrollContext) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
