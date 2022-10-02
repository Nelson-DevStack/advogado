import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaBalanceScale } from 'react-icons/fa';

import Subheading from '../UI/Subheading';
import Text from '../UI/Text';

type SplashScreenProps = {
  time: number;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ time }) => {
  const [timeExpired, setTimeExpired] = useState(false);
  const timeout = time;

  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        setTimeExpired(true);
      }, (timeout + 2) * 1000);
    timer();
  }, []);

  return (
    <motion.div
      className="fixed h-screen w-screen w-full h-full mx-auto bg-mainColor z-[60] flex items-center justify-center"
      style={{
        display: timeExpired ? 'none' : 'fixed',
      }}
      transition={{
        duration: timeout,
        delay: timeout - 1,
      }}
      initial={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      }}
      animate={{
        clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
      }}
    >
      <motion.div
        className="text-white text-center flex flex-col items-center gap-4"
        transition={{
          duration: 0.4,
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <div className="flex flex-col items-center md:flex-row gap-4">
          <FaBalanceScale fontSize={48} />
          <Subheading className="text-white text-5xl">Paulo Almeida</Subheading>
        </div>
        <Text className="text-white !text-xl">Advogado Especializado</Text>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
