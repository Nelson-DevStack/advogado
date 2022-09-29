import Image from 'next/future/image';
import React from 'react';

import googleLogo from '../../../public/logos/google.svg';
import mercadoLogo from '../../../public/logos/mercado_pago.svg';
import microsoftLogo from '../../../public/logos/microsoft.svg';
import sonyLogo from '../../../public/logos/sony.svg';
import twitchLogo from '../../../public/logos/twitch.svg';
import visaLogo from '../../../public/logos/visa.svg';
import Container from '../UI/Container';
import Subheading from '../UI/Subheading';
import Text from '../UI/Text';

const ClientSection = () => {
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
      src: twitchLogo,
      alt: 'Twitch Logo',
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
    <section className="w-full min-h-[50vh] py-16 bg-accentColor/30">
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

          <div className="flex flex-col md:flex-row max-w-[800px] flex-wrap mx-auto items-center justify-center mt-20 gap-10 md:gap-x-28 md:gap-y-12">
            {/* <Image src={logoImg} alt="logo" className="w-full grayscale" /> */}
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