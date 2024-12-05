import PaintPointsStyled from "../styles/sections/painPontsStyled";

const PainPoints = () => {
  return (
    <PaintPointsStyled>
      <div className="container">
        <h2>Você se identifica com alguma dessas situações?</h2>
        <div className="pain-points-grid">
          <div className="pain-point">
            <i className="icon-frustrated"></i>
            <p>Sente que está estagnado na vida pessoal ou profissional?</p>
          </div>
          <div className="pain-point">
            <i className="icon-clock"></i>
            <p>Não consegue gerenciar seu tempo de forma eficiente?</p>
          </div>
          <div className="pain-point">
            <i className="icon-goals"></i>
            <p>Tem dificuldade para estabelecer e alcançar metas?</p>
          </div>
          <div className="pain-point">
            <i className="icon-potential"></i>
            <p>Sabe que tem potencial, mas não sabe como desenvolvê-lo?</p>
          </div>
        </div>
      </div>
    </PaintPointsStyled>
  );
};

export default PainPoints;
