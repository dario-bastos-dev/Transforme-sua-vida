import BenefitsStyled from "../styles/sections/benefitsStyled";

const Benefits = () => {
  return (
    <BenefitsStyled>
      <div className="container">
        <h2>O que você vai descobrir neste e-book</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Mentalidade de Crescimento</h3>
            <p>
              Aprenda a desenvolver uma mentalidade voltada para o crescimento e
              supere suas limitações.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Produtividade Máxima</h3>
            <p>
              Técnicas comprovadas para multiplicar sua produtividade e realizar
              mais em menos tempo.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Habilidades Essenciais</h3>
            <p>
              Desenvolva as habilidades mais valorizadas no século 21 e
              destaque-se em qualquer área.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Equilíbrio Vida-Trabalho</h3>
            <p>
              Encontre o equilíbrio perfeito entre vida pessoal e profissional.
            </p>
          </div>
        </div>
      </div>
    </BenefitsStyled>
  );
};

export default Benefits;
