import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 16px 0;
  background: #ffffff;
  box-shadow: 0px 0px 22px 0px rgba(204, 204, 204, 0.29);
`;

export const HeaderInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileBurgerWrapper = styled.button`
  border: none;
  background-color: transparent;
  @media (min-width: 481px) and (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: none;
  }
`;
export const LogoCatalogueWrapper = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;
export const IconWrapper = styled.div`
  display: none;
  @media (min-width: 481px) and (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: block;
  }
`;
export const CatalogueButtonWrapper = styled.div`
  display: none;
  @media (min-width: 481px) and (max-width: 768px) {
    display: block;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: block;
  }
`;
export const SearchBarWrapper = styled.div`
  display: none;
  @media (min-width: 481px) and (max-width: 768px) {
    display: block;
    width: 220px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 447px;
    display: block;
  }
`;

export const HeaderNavigation = styled.div`
  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const SecondBurgerWrapper = styled.div`
  display: none;
  @media (min-width: 481px) and (max-width: 768px) {
    display: block;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: none;
  }
`;

export const CatalogueButton = styled.button`
  display: flex;
  width: 116px;
  padding: 9px 21px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 0;
  border-radius: 12px;
  background: #5826da;

  @media (min-width: 481px) and (max-width: 767px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 158px;
  }
`;
export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;
export const IconsLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  font-size: 24px;
  position: relative;
`;

export const LikesCounter = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "likesCount", // Не передавати likesCount в DOM
})<{ likesCount: boolean }>`
  background-color: #5826da;
  font-family: Inter;
  font-weight: 600;
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  font-size: 12px;
  color: white;
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  display: ${({ likesCount }) => (likesCount ? "block" : "none")};
`;

export const CatalogueBtnText = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;
export const HeaderIconsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const OpenModalButton = styled.button`
  border: none;
  background-color: transparent;
`;
//Modal
export const BurgerModalWrapper = styled.div`
  padding: 0px 16px 16px 16px;
  @media (min-width: 481px) and (max-width: 768px) {
    display: block;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: none;
  }
`;
export const BurgerModalCatalogueWrapp = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 18px 0px 24px 0px;
  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const BurgerModalButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: #f2f4fa;
  width: 24px;
  height: 24px;
  padding: 4px;
  border-radius: 6px;

  @media (min-width: 481px) and (max-width: 768px) {
  }
`;

export const BurgerModalText = styled.p`
  color: #1e1d21;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  @media (min-width: 481px) and (max-width: 768px) {
    display: block;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: none;
  }
`;

export const BurgerModalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0;

  @media (min-width: 481px) and (max-width: 768px) {
    display: block;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: none;
  }
`;

export const BurgerModalLinkWrapp = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #e0e4f0;

  @media (min-width: 481px) and (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const BurgerModalLink = styled(Link)`
  @media (min-width: 481px) and (max-width: 768px) {
    display: block;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: none;
  }
`;

//Modal
