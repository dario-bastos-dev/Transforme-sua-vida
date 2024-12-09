import FooterStyled from "../styles/components/footerStyled";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <p>© 2024 Transforme sua vida. Todos os direitos reservados.</p>
        {/*<div className="footer-links">
          <a href="#terms">Termos de Uso</a>
          <a href="#privacy">Política de Privacidade</a>
        </div>*/}
      </div>
    </FooterStyled>
  );
};

export default Footer;
