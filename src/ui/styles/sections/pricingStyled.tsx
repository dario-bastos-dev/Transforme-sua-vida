import styled from "styled-components";

const PricingStyled = styled.section`
  background: ${({ theme }) => theme.gradient.primary};
  padding: 80px 0;

  .pricing-card {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 48px;
    border-radius: 16px;
    box-shadow: ${({ theme }) => theme.shadows.shadowLg};
    text-align: center;

    .price {
      margin: 32px 0;

      .original-price {
        display: block;
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.gray};
      }

      .current-price {
        display: block;
        font-size: 48px;
        color: ${({ theme }) => theme.colors.secundary};
        font-weight: 700;
      }
    }

    .pricing-features {
      list-style: none;
      margin: 32px 0;

      li {
        margin: 16px 0;
      }
    }
    .pricing-cta {
      display: block;
      background: ${({ theme }) => theme.colors.secundary};
      color: white;
      padding: 20px 40px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 700;
      margin: 32px 0;
      transition: transform 0.3s ease;
    }

    .pricing-cta:hover {
      transform: scale(1.05);
    }
  }
`;

export default PricingStyled;
