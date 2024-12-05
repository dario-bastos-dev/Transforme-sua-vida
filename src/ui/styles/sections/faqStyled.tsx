import styled from "styled-components";

const FAQStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.textLigth};
  padding: 80px 0;

  .faq-list {
    max-width: 800px;
    margin: 0 auto;

    .faq-item {
      background-color: white;
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 16px;
      box-shadow: ${({ theme }) => theme.shadows.shadowSm};
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: ${({ theme }) => theme.shadows.shadowMd};

        .faq-question {
          font-size: 18px;
          color: ${({ theme }) => theme.colors.primary};
          margin-bottom: 0;
          cursor: pointer;
          position: relative;
          padding-right: 30px;

          &::after {
            content: "+";
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            transition: transform 0.3s ease;
          }
        }
      }
      .faq-question {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 0;
        cursor: pointer;
        position: relative;
        padding-right: 30px;

        &::after {
          content: "+";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          transition: transform 0.3s ease;
        }
      }

      .faq-answer {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.textDark};
        display: none;
        margin-top: 12px;
      }

      &.active .faq-question::after {
        transform: translateY(-50%) rotate(45deg);
      }

      &.active .faq-answer {
        display: block;
      }
    }
  }
`;

export default FAQStyled;
