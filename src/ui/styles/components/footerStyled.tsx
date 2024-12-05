import styled from "styled-components";

const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  padding: 24px 0;
  text-align: center;
  color: white;

  .footer-links {
    margin-top: 16px;

    a {
      text-decoration: none;
      margin: 0 16px;
      opacity: 0.8;
      color: white;
    }
  }
`;

export default FooterStyled;
