import HeroSectionStyled from "../styles/sections/heroStyled";

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <div className="container">
        <div className="hero-content">
          <span className="hero-tag">E-book Exclusivo</span>
          <h1 className="hero-headline">
            Descubra como despertar seu verdadeiro potencial e transformar tua
            vida!
          </h1>
          <p className="hero-subheadline">
            Um guia prático e comprovado para desenvolver habilidades
            essenciais, aumentar sua produtividade e alcançar resultados
            extraordinários
          </p>
          <a href="#pricing" className="hero-cta">
            QUERO TRANSFORMAR MINHA VIDA AGORA
          </a>
          <p className="hero-guarantee">
            🔒 Garantia de 7 dias ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </HeroSectionStyled>
  );
};

export default HeroSection;
