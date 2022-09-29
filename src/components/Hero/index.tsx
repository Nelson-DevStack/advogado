import Image from 'next/future/image';
import React, { useEffect, useState } from 'react';

import Button from '../UI/Button';
import Container from '../UI/Container';
import Heading from '../UI/Heading';
import Text from '../UI/Text';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <section>
      <Container className="grid lg:grid-cols-2 lg:items-center gap-10 min-h-[70vh] lg:justify-between py-10">
        <div>
          <div className="max-w-lg flex flex-col">
            {/* Content Area */}
            <Heading>
              <span className="text-accentColor">Bruce Wayne</span>, advogado
              especializado
            </Heading>
            <Text className="text-">
              Com mais de 500 clientes satisfeitos, luto e advogo pelos seus
              direitos
            </Text>
            <Button
              isLink={false}
              className={
                'border border-accentColor text-accentColor hover:bg-accentColor hover:text-white transition duration-300 text-[1em] mt-4 max-w-fit'
              }
            >
              Conheça-me
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-end">
          {/* Image Area */}
          <div className="max-w-sm w-full h-[26rem] md:h-[30rem] relative">
            <Image
              src="/lawyer.jpg"
              className="
                w-full h-auto mx-auto lg:mr-4 rounded-2xl shadow-2xl
                "
              alt="Hero"
              fill
              style={{
                transform: `translate(${mousePosition.x / 850}em, ${
                  mousePosition.y / 850
                }em)`,
              }}
            />

            <div className="bg-yellow-300 scale-[10em] w-full h-full relative -z-10 top-4 left-5 lg:left-0 rounded-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
