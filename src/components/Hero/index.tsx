import Image from 'next/future/image';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

import heroImg from '../../../public/lawyer.jpg';
import { ScrollContext } from '../../contexts/scrollObserver';
import { FComponent } from '../../types/FComponent';
import Button from '../UI/Button';
import Container from '../UI/Container';
import Heading from '../UI/Heading';
import Text from '../UI/Text';

const Hero: React.FC<FComponent> = ({ id }) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;

  const { current: elementContainer } = refContainer;
  if (elementContainer) {
    progress = Math.min(1, scrollY / elementContainer.clientHeight);
  }

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
    <section
      id={id}
      ref={refContainer}
      className="bg-hero bg-cover h-full -z-50 bg-fixed "
    >
      <div className="backdrop-blur-sm">
        <Container className="grid lg:grid-cols-2 lg:items-center gap-10 min-h-[85vh] lg:justify-between py-10 lg:py-4">
          <div
            style={{
              transform: `translateY(-${progress * 35}vh)`,
            }}
          >
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
              <Link to="clientes" smooth spy duration={500}>
                <Button
                  isLink={false}
                  className={
                    'border border-accentColor text-accentColor hover:bg-accentColor hover:text-white transition duration-300 text-[1em] mt-4 max-w-fit'
                  }
                >
                  Conheça-me
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end relative">
            {/* Image Area */}
            <div className="relative top-0">
              <Image
                src={heroImg}
                className="
                w-full h-auto mx-auto lg:mr-4 rounded-2xl shadow-2xl max-w-sm
                "
                alt="Hero"
                style={{
                  transform: `translate(${mousePosition.x / 850}em, ${
                    mousePosition.y / 850
                  }em)`,
                }}
              />

              <div className="bg-primaryGray/30 blur-sm md:bg-primaryGray/30 w-full md:w-[calc(100%_-_30px)] h-full absolute -z-10 rounded-2xl top-4 left-2 md:left-8" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
