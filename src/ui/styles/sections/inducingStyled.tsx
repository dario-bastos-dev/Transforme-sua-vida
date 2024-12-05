import styled from "styled-components";

const InducingStyled = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  padding: 80px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLigth};

  h2 {
  color: ${({ theme }) => theme.colors.textLigth};
}

  p {
    max-width: 800px;
    margin: 0 auto 30px;
    font-size: 18px;
  }

  .inducing-cta {
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
`;

export default InducingStyled;
