import React, { FormEvent } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import { FComponent } from '../../types/FComponent';
import Button from '../UI/Button';
import Container from '../UI/Container';
import Subheading from '../UI/Subheading';
import Text from '../UI/Text';

const ContactSection: React.FC<FComponent> = ({ id }) => {
  return (
    <section className="py-24 w-full bg-accentColor/30" id={id}>
      <Container>
        <div>
          <Subheading>Entre em Contato</Subheading>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <form
              className="max-w-md"
              onSubmit={(event: FormEvent) => event.preventDefault()}
            >
              <label className="text-lg flex flex-col gap-1 text-primaryGray my-2">
                Nome Completo
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="rounded-md py-2 px-2 text-base"
                />
              </label>

              <div className="grid md:grid-cols-2 md:gap-5">
                <label className="text-lg flex flex-col gap-1 text-primaryGray my-2">
                  E-mail
                  <input
                    type="email"
                    placeholder="exemplo@email.com"
                    className="rounded-md py-2 px-2 text-base"
                  />
                </label>

                <label className="text-lg flex flex-col gap-1 text-primaryGray my-2">
                  Telefone
                  <input
                    type="phone"
                    placeholder="55 99999-9999"
                    className="rounded-md py-2 px-2 text-base"
                  />
                </label>
              </div>

              <label className="text-lg flex flex-col gap-1 text-primaryGray my-2">
                Sua mensagem
                <textarea
                  placeholder="Digite aqui sua mensagem"
                  className="rounded-md py-2 px-2 text-base"
                  rows={8}
                />
              </label>

              <Button
                isLink={false}
                className="px-5 bg-[#F56F56] text-white font-medium tracking-wide mt-3 transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                Enviar
              </Button>
            </form>
          </div>
          <div>
            <div>
              <Text className="font-semibold">Endere??o</Text>
              <Text>Rua X, Complemento 2022 - Bairro Brasil</Text>
              <Text>96385-741</Text>
            </div>

            <div className="mt-4">
              <Text className="font-semibold">Telefone</Text>
              <Text>(55) 96385-2741</Text>
              <Text>(55) 96385-2741</Text>
            </div>

            <div className="mt-5">
              <iframe
                className="h-56 w-full"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.98776471614839%2C40.74749877410708%2C-73.98422420024873%2C40.74936211406477&amp;layer=mapnik"
              ></iframe>
            </div>
          </div>

          <div className="space-y-4 border-t border-gray-400 md:border-0 pt-5">
            <Text className="font-medium">Redes Sociais:</Text>
            <a
              href="https://youtube.com"
              className="flex items-center text-[#333]  gap-3 text-lg font-medium max-w-fit p-2"
            >
              <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-accentColor text-2xl text-[#333] ">
                <FaInstagram />
              </span>
              @paulo_advogado
            </a>
            <a
              href="https://youtube.com"
              className="flex items-center text-[#333]  gap-3 text-lg font-medium max-w-fit p-2"
            >
              <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-accentColor text-2xl text-[#333]">
                <FaFacebook />
              </span>
              paulo_advogado
            </a>
            <a
              href="https://youtube.com"
              className="flex items-center text-[#333]  gap-3 text-lg font-medium max-w-fit p-2"
            >
              <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-accentColor text-2xl text-[#333]">
                <SiGmail />
              </span>
              pauloalmeida@email.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
