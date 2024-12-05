import styled from "styled-components";

const TestimonialsStyled = styled.section`
  padding: 80px 0;

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    margin-top: 48px;

    .testimonial-item {
      background: white;
      padding: 32px;
      border-radius: 8px;
      box-shadow: ${({ theme }) => theme.shadows.shadowMd};
      text-align: center;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 16px;
      }
    }
  }
`;

export default TestimonialsStyled;
