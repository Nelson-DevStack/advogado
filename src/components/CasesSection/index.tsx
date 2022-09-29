import Image from 'next/future/image';
import React from 'react';

import enterpriseImg from '../../../public/enterprise.jpg';
import financeImg from '../../../public/finance.jpg';
import triburarioImg from '../../../public/tributario.jpg';
import Container from '../UI/Container';
import Subheading from '../UI/Subheading';
import Text from '../UI/Text';

const CasesSection = () => {
  const cardData = [
    {
      title: 'Direito Consumidor',
      image: financeImg,
      text: 'É a soma de regras e princípios jurídicos que envolvem todas as relações de consumo, isto é, as relações entre o consumidor e o fornecedor de produtos e/ou de serviços.',
    },
    {
      title: 'Direito Empresarial',
      image: enterpriseImg,
      text: 'O direito empresarial abrange um conjunto variado de matérias, incluindo as obrigações dos empresários, as sociedades empresárias.',
    },
    {
      title: 'Direito Tributário',
      image: triburarioImg,
      text: 'É o segmento do direito financeiro que define como serão cobrados dos cidadãos (contribuintes) os tributos e outras obrigações a ele relacionadas.',
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <div>
          <div className="flex items-center justify-center mb-14">
            <Subheading className="text-center">Casos que trabalho</Subheading>
          </div>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-14">
            {cardData.map((data) => (
              <div
                key={data.title}
                className="px-4 md:px-0 lg:px-4 max-w-sm mx-auto flex flex-col items-center mb-10 md:mb-0"
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-[200px] h-[200px] object-cover rounded-full border border-gray-300 shadow-xl"
                />
                <h3 className="text-xl font-medium text-primaryGray mt-5 mb-2 text-center">
                  {data.title}
                </h3>
                <Text className="text-center">{data.text}</Text>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default CasesSection;
