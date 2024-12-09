import styled from "styled-components";

const ContentStyled = styled.section`
  background: ${({ theme }) => theme.colors.textLigth};
  padding: 80px 0;

  .ebook-content {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadows.shadowMd};

    ul {
      margin-left: 20px;
      margin-bottom: 20px;

      p {
        margin-bottom: 20px;
      }
    }
  }

  .cta {
    margin-top: 50px;
    text-align: center;
  }
`;

export default ContentStyled;
