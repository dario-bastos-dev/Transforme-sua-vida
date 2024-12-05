import styled from "styled-components";

const BenefitsStyled = styled.section`
  padding: 80px 0;

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(280px, 1fr));
    gap: 32px;
    margin-top: 48px;

    .benefit-item {
      padding: 32px;
      background: white;
      border-radius: 8px;
      box-shadow: ${({ theme }) => theme.shadows.shadowMd};
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`;

export default BenefitsStyled;
