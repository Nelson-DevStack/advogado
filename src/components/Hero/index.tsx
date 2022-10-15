import Image from 'next/future/image';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

// import heroImg from '../../../public/lawyer.jpg';
import heroImg from '../../assets/Lawyer-hero.png';
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

  return (
    <section
      id={id}
      ref={refContainer}
      className="bg-cover h-full -z-50 bg-fixed "
    >
      <div className="backdrop-blur-sm">
        <Container className="grid lg:grid-cols-2 lg:items-center gap-10 lg:justify-between py-10 ">
          <div
            style={{
              transform: `translateY(-${progress * 35}vh)`,
            }}
          >
            <div className="max-w-xl flex flex-col">
              {/* Content Area */}
              <Heading className="font-headingSerif md:!text-5xl">
                <span className="text-accentColor">Paulo Almeida</span>,
                advogado especializado
              </Heading>
              <Text className="mt-3">
                Com mais de 500 clientes satisfeitos, luto e advogo pelos seus
                direitos
              </Text>
              <Link to="clientes" smooth spy duration={500}>
                <Button
                  isLink={false}
                  className={
                    'border border-accentColor text-white bg-accentColor hover:bg-white hover:text-accentColor transition duration-300 rounded-full px-5 text-[1em] mt-4 max-w-fit'
                  }
                >
                  Conheça-me
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end relative">
            {/* Image Area */}
            <div>
              <Image
                src={heroImg}
                alt={'Imagem Principal do Advogado'}
                priority={true}
                className="w-full h-full"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
