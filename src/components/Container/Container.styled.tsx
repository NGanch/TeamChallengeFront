import styled from "styled-components";

export const MainSection = styled.section`
  margin-top: 18px;
  margin-bottom: 18px;
  @media (min-width: 481px) and (max-width: 767px) {
  }

  /* Tablet (iPad) */
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 24px;
    margin-bottom: 40px;
  }

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 24px;
    margin-bottom: 100px;
  }
`;

export const Section = styled.section`
  margin-top: 18px;
  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 24px;
  }
  /* Desktop */
  @media (min-width: 769px) and (max-width: 1440px) {
    margin-top: 70px;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 22px;
  padding-right: 22px;
  min-width: 320px;
  max-width: 375px;

  @media screen and (max-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (max-width: 1440px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1280px;
  }
`;

export const SecondContainer = styled.div`
  margin-left: auto;
  margin-right: 0;
  padding-left: 22px;
  padding-right: 0px;
  min-width: 320px;
  max-width: 375px;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1280px;
  }
`;
