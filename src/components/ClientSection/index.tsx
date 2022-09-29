import Image from 'next/future/image';
import React from 'react';

import logoImg from '../../../public/logos/microsoft.svg';
import Container from '../UI/Container';
import Subheading from '../UI/Subheading';
import Text from '../UI/Text';

const ClientSection = () => {
  return (
    <section className="w-full min-h-[50vh] bg-accentColor/30">
      <Container>
        <div className="">
          <div>
            <Subheading>Conheça alguns dos meus clientes</Subheading>
            <Text>
              O escritório de Bruce Wayne já ajudou grandes empresas e companias
              a progredirem.
            </Text>
          </div>

          <div>
            <Image src={logoImg} alt="logo" className="w-full grayscale" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientSection;
