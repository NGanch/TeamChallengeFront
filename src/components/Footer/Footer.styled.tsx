import styled from "styled-components";

import { Field } from "formik";
import transition from "../../utils/transition";

import { NavLink } from "react-router-dom";

export const FooterWrapper = styled.footer`
  padding: 32px 0 32px 0;
  background: ${({ theme }) => theme.PrimaryBlack};

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 40px 0;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 100px 0px 20px 0px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media (min-width: 481px) and (max-width: 768px) {
    gap: 40px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 36px;

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: row;
    gap: 75px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const InfoText = styled.p`
  margin-top: 16px;
  margin-bottom: 20px;
  width: 176px;
  color: ${({ theme }) => theme.TritiaryGray};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 130% */

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

export const InfoIconList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const InformationContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
  padding: 12px 0;
  border-top: 1px solid ${({ theme }) => theme.TritiaryGray};
  border-bottom: 1px solid ${({ theme }) => theme.TritiaryGray};

  @media (min-width: 481px) and (max-width: 768px) {
    gap: 15px;
    height: 65px;
    border-top: none;
    border-bottom: none;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: flex;
    gap: 60px;
    flex-direction: row;
    border-top: none;
    border-bottom: none;
  }
`;
export const InformationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InformationListTitles = styled.h4`
  color: ${({ theme }) => theme.TritiaryLightGray};
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-bottom: 0px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    margin-bottom: 24px;
  }
`;
export const InformationButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    width: 16px;
    height: 16px;

    &:focus {
      outline: none;
    }

    svg {
      transition: transform 0.3s ease;
    }

    &.open svg {
      transform: rotate(90deg);
    }
  // Для десктопної версії (ширина екрану > 768px)
  @media (min-width: 769px) {
      display: none; // Приховуємо кнопку
  }
}
`;

export const InformationList = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;

  &.open {
    max-height: 500px; // Відкрити список
  }

  &.closed {
    max-height: 0; // Закрити список
  }
  // Для десктопної версії (ширина екрану > 768px)
  @media (min-width: 769px) {
    max-height: none; // Завжди розгорнуті списки
    overflow: visible;
    justify-content: normal;
  }
`;

export const InformationItem = styled.li`
  color: ${({ theme }) => theme.TritiaryGray};
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const SubscribeContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 12px;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightestGray};
  margin-bottom: 0px;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 20px;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 280px;

  @media (min-width: 481px) and (max-width: 768px) {
    width: 244px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 275px;
  }
`;

export const SubscribeWrapperText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubscribeTitle = styled.h3`
  color: ${({ theme }) => theme.TritiaryLightestGray};
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 130% */
  }
`;

export const SubscribeText = styled.p`
  color: ${({ theme }) => theme.TritiaryGray};
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;

export const SubscribeField = styled(Field)`
  display: flex;
  width: 100%;
  padding: 13px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightestGray};

  transition: border-color ${transition};

  // &:hover,
  // &:focus {
  // color: ${({ theme }) => theme.modalText};
  // background-color: ${({ theme }) => theme.modalBg};
  // border: 1px solid ${({ theme }) => theme.modalBtnBorderHover};
  // }
`;

export const SubscribeButton = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.PrimaryBrightPurple};

  color: ${({ theme }) => theme.PrimaryWhite};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */

  transition: background-color ${transition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.SecondaryDarkPurple};
  }
`;

export const PolicyContainer = styled.div`
  display: flex;

  margin-top: 0px;
  gap: 10px;
  flex-direction: column-reverse;

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PolicyText = styled.p`
  color: ${({ theme }) => theme.TritiaryGray};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;

export const PolicyList = styled.ul`
  display: flex;
  gap: 10px;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    gap: 60px;
  }
`;

export const PolicyItem = styled.li``;

export const PolicyLink = styled(NavLink)`
  color: ${({ theme }) => theme.TritiaryGray};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;
