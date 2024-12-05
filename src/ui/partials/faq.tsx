import { useState } from "react";
import FAQStyled from "../styles/sections/faqStyled";

const faq = [
  {
    id: 1,
    question: "Preciso ter experiência prévia em desenvolvimento pessoal?",
    answer: `Não! O conteúdo foi desenvolvido para ser acessível a qualquer
              pessoa, independente do nível de experiência. O e-book guia você
              passo a passo desde o básico até técnicas mais avançadas de
              desenvolvimento pessoal e produtividade`,
  },
  {
    id: 2,
    question: "Em quais dispositivos posso ler o e-book?",
    answer: `O e-book está em formato PDF, compatível com praticamente todos os
              dispositivos: computadores, tablets, smartphones, e-readers, etc.
              Você pode ler em qualquer dispositivo que suporte a leitura de
              PDFs, garantindo flexibilidade para estudar onde e quando quiser.`,
  },
  {
    id: 3,
    question: `Quanto tempo leva para ver resultados após começar a aplicar as
              técnicas do e-book?`,
    answer: `Muitos leitores relatam melhorias significativas em suas vidas nas
              primeiras semanas de aplicação das técnicas. No entanto, o ritmo
              de progresso pode variar de pessoa para pessoa, dependendo da
              consistência e dedicação na aplicação dos métodos. O e-book inclui
              um plano de 30 dias para maximizar seus resultados.`,
  },
  {
    id: 4,
    question: "O e-book oferece suporte após a compra?",
    answer: `Sim! Se em até 7 dias vocé não estiver completamente
                satisfeito com o conteúdo, devolvemos 100% do seu investimento,
                sem questionamentos.`,
  },
  {
    id: 5,
    question: "Posso solicitar reembolso se não ficar satisfeito?",
    answer: `Absolutamente. Oferecemos uma garantia de satisfação de 7 dias. Se
              você não estiver completamente satisfeito com o e-book, pode
              solicitar um reembolso total dentro deste período, sem
              questionamentos. Basta enviar um e-mail para nosso suporte
              explicando brevemente o motivo da insatisfação.`,
  },
  {
    id: 6,
    question: "Existe uma versão física do livro disponível?",
    answer: `No momento, oferecemos apenas a versão digital (e-book) para
              garantir entrega imediata e manter o preço acessível.`,
  },
  {
    id: 7,
    question: "Posso compartilhar meu e-book com amigos ou familiares?",
    answer: `O e-book é licenciado para uso individual e pedimos que respeite
              os direitos autorais não compartilhando o arquivo. No entanto,
              oferecemos um programa de indicação onde você pode ganhar
              descontos ou até uma cópia gratuita ao indicar amigos que realizem
              a compra. Entre em contato conosco para mais detalhes sobre o
              programa de indicação.`,
  },
];

const FAQ = () => {
  const [isOpenId, setIsOpenId] = useState<number | null>(null);

  function handleClick(id: number) {
    setIsOpenId(id === isOpenId ? null : id);
  }

  return (
    <FAQStyled id="faq">
      <div className="container">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-list">
          {faq.map((question) => (
            <div
              className={`faq-item ${isOpenId === question.id && "active"}`}
              key={question.id}
              onClick={() => handleClick(question.id)}
            >
              <h3 className="faq-question">{question.question}</h3>
              {isOpenId === question.id && (
                <p className="faq-answer">{question.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </FAQStyled>
  );
};

export default FAQ;
