import TestimonialsStyled from "../styles/sections/testimonialsStyled";

const Testimonials = () => {
  return (
    <TestimonialsStyled>
      <div className="container">
        <h2>O que dizem as pessoas que já transformaram suas vidas</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <img src="testimonial1.jpg" alt="João Silva" />
            <p>
              "Em apenas 30 dias, consegui reorganizar minha vida e aumentar
              minha produtividade em 200%. Os resultados foram surpreendentes!"
            </p>
            <h4>João Silva</h4>
            <span>Empresário</span>
          </div>
          <div className="testimonial-item">
            <img src="testimonial2.jpg" alt="Maria Santos" />
            <p>
              "As técnicas de desenvolvimento de habilidades me ajudaram a
              conseguir uma promoção que eu almejava há anos."
            </p>
            <h4>Maria Santos</h4>
            <span>Gerente de Projetos</span>
          </div>
        </div>
      </div>
    </TestimonialsStyled>
  );
};

export default Testimonials;
