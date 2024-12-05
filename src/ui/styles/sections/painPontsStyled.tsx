import styled from "styled-components";

const PaintPointsStyled = styled.section`
  background: ${({ theme }) => theme.colors.textLigth};
  padding: 80px 0;

  .pain-points-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;

    .pain-point {
      text-align: center;
      padding: 24px;
      background: white;
      border-radius: 8px;
      box-shadow: ${({ theme }) => theme.shadows.shadowMd};
    }
  }
`;

export default PaintPointsStyled;
