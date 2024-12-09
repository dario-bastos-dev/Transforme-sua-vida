import Btn from "../styles/components/btn";
import ContentStyled from "../styles/sections/contentStyled";

const Content = () => {
  return (
    <ContentStyled>
      <div className="container">
        <h2>O que devo esperar?</h2>
        <div className="ebook-content">
          <p>
            O e-book "Transforme sua vida" foi cuidadosamente elaborado para
            oferecer um caminho claro e prático para o desenvolvimento pessoal e
            profissional. Baseado em anos de pesquisa e experiência prática,
            este guia abrange:
          </p>
          <ul>
            <li>
              Capítulos detalhados sobre cada aspecto do desenvolvimento pessoal
            </li>
            <li>Exercícios práticos para aplicação imediata dos conceitos</li>
            <li>Estudos de caso reais demonstrando a eficácia das técnicas</li>
            <li>
              Planos de ação personalizáveis para diferentes objetivos de vida
            </li>
          </ul>
          <p>
            Cada página deste e-book foi criada com o objetivo de proporcionar
            insights valiosos e ferramentas práticas que você pode começar a
            usar imediatamente para transformar sua vida.
          </p>
        </div>
        <div className="cta">
          <Btn href="#pricing">QUERO TRANSFORMAR MINHA VIDA AGORA</Btn>
        </div>
      </div>
    </ContentStyled>
  );
};

export default Content;
