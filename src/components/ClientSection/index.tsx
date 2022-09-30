import Image from 'next/future/image';
import React, { useContext, useRef } from 'react';

import googleLogo from '../../../public/logos/google.svg';
import mercadoLogo from '../../../public/logos/mercado_pago.svg';
import microsoftLogo from '../../../public/logos/microsoft.svg';
import sonyLogo from '../../../public/logos/sony.svg';
import teslaLogo from '../../../public/logos/tesla.svg';
import visaLogo from '../../../public/logos/visa.svg';
import { ScrollContext } from '../../contexts/scrollObserver';
import { FComponent } from '../../types/FComponent';
import Container from '../UI/Container';
import Subheading from '../UI/Subheading';
import Text from '../UI/Text';

const ClientSection: React.FC<FComponent> = ({ id }) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  let progress = 0;
  if (refContainer.current) {
    progress = Math.min(2, scrollY / refContainer.current.clientHeight);
  }

  const images = [
    {
      src: googleLogo,
      alt: 'Google Logo',
    },
    {
      src: sonyLogo,
      alt: 'Sony Logo',
    },
    {
      src: teslaLogo,
      alt: 'Tesla Logo',
    },
    {
      src: visaLogo,
      alt: 'Visa Logo',
    },
    {
      src: mercadoLogo,
      alt: 'Mercado Pago Logo',
    },
    {
      src: microsoftLogo,
      alt: 'Microsoft Logo',
    },
  ];

  return (
    <section
      className="w-full  min-h-[50vh] flex py-24 bg-accentColor/30"
      id={id}
      ref={refContainer}
    >
      <Container>
        <div className="">
          <div className="flex flex-col items-center">
            <Subheading className="text-center">
              Conheça alguns dos meus clientes
            </Subheading>
            <Text className="text-center max-w-md">
              O escritório de Bruce Wayne já ajudou grandes empresas e companias
              a progredirem.
            </Text>
          </div>

          <div
            className="flex flex-col md:flex-row max-w-[800px] flex-wrap mx-auto items-center justify-center mt-20 gap-10 md:gap-x-28 md:gap-y-12"
            style={{
              gap: `${progress * 40}px`,
            }}
          >
            {images.map((img) => (
              <Image
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="max-w-[120px] grayscale"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientSection;
