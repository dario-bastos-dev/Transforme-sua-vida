import styled from "styled-components";

const FinalStyled = styled.section`
  background: ${({ theme }) => theme.gradient.primary};
  color: white;
  padding: 80px 0;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.textLigth};
  }

  .final-cta-button {
    display: inline-block;
    background: ${({ theme }) => theme.colors.secundary};
    color: white;
    padding: 20px 40px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    margin-top: 32px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export default FinalStyled;
