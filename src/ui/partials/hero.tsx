import HeroSectionStyled from "../styles/sections/heroStyled";
import person from "../../assets/Melhora.jpg";
import Btn from "../styles/components/btn";

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
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
            <Btn href="#pricing">
              QUERO TRANSFORMAR MINHA VIDA AGORA
            </Btn>
            <p className="hero-guarantee">
              🔒 Garantia de 7 dias ou seu dinheiro de volta
            </p>
          </div>

          <div className="hero-image">
            <img src={person} alt="Pessoa que mudou de vida" />
          </div>
        </div>
      </div>
    </HeroSectionStyled>
  );
};

export default HeroSection;
