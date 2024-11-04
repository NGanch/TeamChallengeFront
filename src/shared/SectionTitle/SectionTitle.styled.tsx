import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-bottom: 16px;
    font-family: Inter;
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
  }

  /* Tablet (iPad) */
  @media (min-width: 769px) and (max-width: 1024px) {
  }

  /* Desktop */
  @media (min-width: 769px) and (max-width: 1440px) {
    margin-bottom: 24px;
    font-family: Inter;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-align: left;
  }
`;
