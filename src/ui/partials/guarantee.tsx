import GuaranteeStyled from "../styles/sections/guaranteeStyled";

const Guarantee = () => {
  return (
    <GuaranteeStyled>
      <div className="container">
        <div className="guarantee-content">
          <img src="guarantee-seal.png" alt="Selo de Garantia" />
          <h2>Garantia Incondicional de 7 Dias</h2>
          <p>
            Se em até 7 dias você não estiver completamente satisfeito com o
            conteúdo, devolvemos 100% do seu investimento, sem questionamentos.
          </p>
        </div>
      </div>
    </GuaranteeStyled>
  );
};

export default Guarantee;
