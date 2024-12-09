import Btn from "../styles/components/btn";
import PaintPointsStyled from "../styles/sections/painPontsStyled";
import {
  BatteryMedium,
  CalendarX,
  ClockCountdown,
  TrendUp,
} from "@phosphor-icons/react";

const PainPoints = () => {
  return (
    <PaintPointsStyled>
      <div className="container">
        <h2>Você se identifica com alguma dessas situações?</h2>
        <div className="pain-points-grid">
          <div className="pain-point">
            <BatteryMedium size={32} />
            <p>Sente que está estagnado na vida pessoal ou profissional?</p>
          </div>
          <div className="pain-point">
            <ClockCountdown size={32} />
            <p>Não consegue gerenciar seu tempo de forma eficiente?</p>
          </div>
          <div className="pain-point">
            <CalendarX size={32} />
            <p>Tem dificuldade para estabelecer e alcançar metas?</p>
          </div>
          <div className="pain-point">
            <TrendUp size={32} />
            <p>Sabe que tem potencial, mas não sabe como desenvolvê-lo?</p>
          </div>
        </div>
        <div className="cta">

        <Btn href="#pricing">TRANSFORMAR MINHA VIDA</Btn>
        </div>
      </div>
    </PaintPointsStyled>
  );
};

export default PainPoints;
