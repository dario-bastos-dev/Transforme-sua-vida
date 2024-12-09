import styled from "styled-components";

const Btn = styled.a`
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
`;

export default Btn;