import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

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

  // width: 899px;
  width: 100vw;
  border-radius: 12px;
`;

export const SliderItem = styled(SwiperSlide)`
  position: relative;
  // width: 760px;
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 16px;
    flex-wrap: nowrap;
    gap: 8px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    flex-wrap: nowrap;
    margin-bottom: 40px;
    gap: 10px;
  }
`;

export const CardItem = styled.li`
  width: calc(50% - 12px);
  display: flex;

  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightGray};

  @media (min-width: 481px) and (max-width: 768px) {
    width: calc(50% - 8px);
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const DealText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 16px;
  padding: 4px 0px 4px 0px;
  gap: 10px;
  border-radius: 0px 0px 10px 10px;

  background: ${({ theme }) => theme.SecondaryExoticPink};
  color: ${({ theme }) => theme.PrimaryWhite};
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;

  @media (min-width: 481px) and (max-width: 768px) {
    width: 80px;
    height: 24px;

    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: none;
  }
`;

export const CardDiv = styled.div`
  padding: 0 16px 16px 16px;

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0 14px 24px 14px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 20px;
  }
`;

export const MainDevisImageDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const MainDevisIMG = styled.img`
  width: 112px;
  height: auto;

  @media (min-width: 481px) and (max-width: 768px) {
    width: 146px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 160px;
    height: 199px;
    border-radius: 14px;
  }
`;
export const MainDevisBtnDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(166%, -131%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  @media (min-width: 481px) and (max-width: 768px) {
    transform: translate(157%, -131%);
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const MainDevisBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background: ${({ theme }) => theme.PrimaryWhite};
  border-radius: 8px;
  border: none;

  @media (min-width: 481px) and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 36px;
    height: 36px;
  }
`;

export const TitleLinkWrapp = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 6px;
    margin-bottom: 6px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    margin-top: 8px;
    margin-bottom: 16px;
  }
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.PrimaryBlack};

  font-family: Inter;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;

  @media (min-width: 481px) and (max-width: 768px) {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0em;
  }
`;

export const PriceText = styled.p`
  color: ${({ theme }) => theme.TritiaryPurpleGray};
  font-family: Inter;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  text-align: left;
  text-decoration: line-through;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 6px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    text-align: left;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const DiscountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`;

export const DiscountDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DealTextBtn = styled.p`
  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 26px;
    padding: 4px 0px 4px 0px;
    gap: 10px;
    border-radius: 10px;

    background: ${({ theme }) => theme.SecondaryExoticPink};
    color: ${({ theme }) => theme.PrimaryWhite};
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
`;

export const DiscountPrice = styled.p`
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;

  @media (min-width: 481px) and (max-width: 768px) {
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 20px;
    line-height: 26px;
  }
`;
