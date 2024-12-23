import PricingStyled from "../styles/sections/pricingStyled";
import capa from "../../assets/Capa.jpg";

const Pricing = () => {
  return (
    <PricingStyled id="pricing">
      <div className="container">
        <div className="pricing-card">
          <h2>Investimento Único</h2>
          <img src={capa} alt="Capa do livro" />
          <div className="price">
            <span className="original-price">De R$ 97,00</span>
            <span className="current-price">Por apenas R$ 19,90</span>
          </div>
          <ul className="pricing-features">
            <li>✓ E-book Completo</li>
            <li>✓ Acesso Vitalício</li>
            <li>✓ Atualizações Gratuitas</li>
            <li>✓ Garantia de 7 dias</li>
          </ul>
          <a href="https://payfast.greenn.com.br/90749" className="pricing-cta">
            QUERO TRANSFORMAR MINHA VIDA AGORA
          </a>
          {/*<div className="payment-methods">
            <img src="payment-methods.png" alt="Formas de pagamento" />
          </div>*/}
        </div>
      </div>
    </PricingStyled>
  );
};

export default Pricing;
