import styled from "styled-components";

const HeroSectionStyled = styled.section`
  background: ${({ theme }) => theme.gradient.primary};
  padding: 80px 0;
  color: ${({ theme }) => theme.colors.textLigth};

  .hero-content {
    padding-top: 30px;
    max-width: 1280px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    .hero-text {
      width: 650px;
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
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 500px;
        border-radius: 20px;
      }
    }
  }
`;

export default HeroSectionStyled;
