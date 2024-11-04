import styled from "styled-components";
// import { Slide } from 'react-slideshow-image';
import { Swiper, SwiperSlide } from "swiper/react";
import transition from "../../utils/transition";

export const SliderContainer = styled(Swiper)`
  .swiper-button-prev {
    position: absolute;
    top: 50%;
  }
  .swiper-button-next {
    position: absolute;
    top: 50%;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 15px;
    color: transparent;
  }

  background: linear-gradient(
    179.77deg,
    #5826da 6.06%,
    rgba(88, 38, 218, 0) 99.8%
  );
  width: 899px;
  //   width: 100vw;
  border-radius: 12px;
  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const SliderItem = styled(SwiperSlide)`
  position: relative;
  width: 760px;
`;

export const SliderImg = styled.img`
  width: 217px;
  height: 102px;
  position: absolute;
  top: 10%;
  left: 33%;
  @media (min-width: 481px) and (max-width: 768px) {
    width: 410px;
    height: 203px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 417px;
    height: 222px;
    top: 19%;
    left: 42%;
  }
`;

export const SliderTextDiv = styled.div`
  padding-top: 24px;
  padding-left: 20px;
  padding-bottom: 30px;
  @media (min-width: 481px) and (max-width: 768px) {
    padding-top: 71px;
    padding-left: 54px;
    padding-bottom: 72px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding-top: 108px;
    padding-left: 110px;
  }
`;

export const SliderTitle = styled.h1`
  margin-bottom: 8px;
  width: 113px;
  color: ${({ theme }) => theme.PrimaryWhite};

  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  @media (min-width: 481px) and (max-width: 768px) {
    margin-bottom: 18px;
    width: 198px;
    font-family: Inter;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-align: left;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    margin-bottom: 8px;
    width: 225px;
    font-family: Inter;
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const SliderDiscText = styled.p`
  color: ${({ theme }) => theme.TritiaryLightGray};
  font-family: Inter;
  font-size: 10.39px;
  font-weight: 400;
  line-height: 16.32px;
  text-align: left;

  text-decoration-line: strikethrough;
  @media (min-width: 481px) and (max-width: 768px) {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`;

export const SliderPriceWrapp = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const SliderPriceText = styled.p`
  color: ${({ theme }) => theme.PrimaryWhite};

  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;

  @media (min-width: 481px) and (max-width: 768px) {
    //styleName: Tablet/H4;
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 130% */
  }
`;

export const SliderPriceButton = styled.button`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.SecondaryExoticPink};
  color: ${({ theme }) => theme.PrimaryWhite};
  font-family: Inter;
  font-size: 8.9px;
  font-weight: 400;
  line-height: 13.35px;
  text-align: center;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
`;
export const ButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 2%;
  background: ${({ theme }) => theme.TritiaryLightestGray};
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 8px;
  border: none;
  transition: background-color ${transition};
`;
export const ButtonRight = styled.button`
  position: absolute;
  top: 50%;
  right: 2%;
  background: ${({ theme }) => theme.TritiaryLightestGray};
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 8px;
  border: none;
  transition: background-color ${transition};
`;
