import styled from "styled-components";

const HeroSectionStyled = styled.section`
  background: ${({ theme }) => theme.gradient.primary};
  padding: 80px 0;
  color: ${({ theme }) => theme.colors.textLigth};

  .hero-content {
    padding-top: 30px;
    max-width: 600px;

    .hero-tag {
      display: inline-block;
      background: ${({ theme }) => theme.colors.secundary};
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .hero-headline {
      font-size: 47px;
      line-height: 1.2;
      margin-bottom: 24px;
    }

    .hero-subheadline {
      font-size: 20px;
      margin-bottom: 32px;
      opacity: 0.9;
    }

    .hero-cta {
      display: inline-block;
      background: ${({ theme }) => theme.colors.secundary};
      color: white;
      padding: 16px 32px;
      border-radius: 8px;
      font-weight: 700;
      text-decoration: none;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }
`;

export default HeroSectionStyled;
