import Image from 'next/future/image';
import React from 'react';

import aboutImg from '../../../public/agreement.jpg';
import Container from '../UI/Container';
import Subheading from '../UI/Subheading';
import Text from '../UI/Text';

const SecondHero = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-10 md:gap-14 md:grid-cols-2">
          <div>
            {/* Image */}
            <Image
              src={aboutImg}
              alt="Agreement"
              className="rounded-lg drop-shadow-xl object-cover h-full"
            />
          </div>
          <div>
            {/* Content */}
            <Subheading className="text-center md:text-left">
              Sobre mim
            </Subheading>
            <Text className="my-4">
              Burying chaos snare free war derive insofar battle overcome chaos
              self law virtues pinnacle. Victorious moral of sea enlightenment
              ultimate gains disgust zarathustra salvation against decieve.
            </Text>
            <Text className="my-4">
              Play oneself disgust play burying battle. Enlightenment
              enlightenment ultimate pinnacle good enlightenment pinnacle
              revaluation free overcome gains.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SecondHero;
