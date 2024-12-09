import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin: 0 15px;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.primary};
          font-size: 14px;
          font-weight: 600;
          transition: color 0.3s ease;

          &:hover {
            color: ${({ theme }) => theme.colors.secundary};
          }
        }
      }
    }
 
  }
`;

export default HeaderStyled;
