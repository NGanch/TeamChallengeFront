import styled from "styled-components";
import ReactSelect from "react-select";
import transition from "../../utils/transition";

export const MenuCatalogueContainer = styled.div``;

export const StyledSelect = styled(ReactSelect)`
  & .Select__control {
    width: 100%;
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;

    svg {
      transform: rotate(-90deg);
      // transition: transform ;
      width: 24px;
      height: 24px;
      color: #aea8b7;
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(360deg);
      }
    }
  }

  & .Select__value-container {
    display: none;

    @media screen and (min-width: 768px) {
    }
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  // & .Select__indicator {
  //   cursor: pointer;

  //   &:hover {
  //     color: #f3f3f3;
  //   }

  //   @media screen and (min-width: 768px) {

  //   }
  // }

  // & .Select__input-container {
  //   color: #f3f3f3;
  //   margin: 0;
  //   padding: 0;

  //   &:hover {
  //     color: #f3f3f3;
  //   }

  //   @media screen and (min-width: 768px) {
  //     font-size: 17px;
  //   }
  // }

  // & .Select__input {
  //   line-height: 1.285 !important;

  //   @media screen and (min-width: 768px) {
  //     line-height: 1.56 !important;
  //   }
  // }

  & .Select__placeholder,
  & .Select__single-value {
    color: #f3f3f3;
    line-height: 1.285;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }

  & .Select__menu {
    z-index: 100;
    width: 200px;
    margin: 0;
    margin-top: 4px;
    border-radius: 24px;
    background-color: #ffffff;
  }

  & .Select__menu-list {
    padding: 10px;
    border-radius: 24px;
    // background-color: ${({ theme }) => theme.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    max-height: 400px;
  }

  & .Select__option {
    color: #1e1d21;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

    padding: 4px 14px;
    border-radius: 20px;

    // transition:
    //   color ,
    //   background-color ;
    background-color: transparent;
    cursor: pointer;
    &:hover,
    &:focus {
      color: #ffffff;
      // background-color: #e0d4f7;
      background-color: #6142db;
    }

    &:active {
      color: #ffffff;
      background-color: #e0d4f7;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 218px;
  height: 360px;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 20px 0;
    width: 350px;
    height: 360px;
    border-radius: 0px 12px;
    border-right: 1px solid #e0e4f0;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 4px 0px;

  transition: background-color ${transition}, color ${transition};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.PrimaryBrightPurple};
    background-color: ${({ theme }) => theme.TritiaryLightGray};
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 8px 0px;
    gap: 20px;
  }
`;

export const TextDiv = styled.div`
  display: flex;

  align-items: center;
  gap: 24px;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    gap: 20px;
  }
`;

export const MenuTitle = styled.h3`
  width: 148px;
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;

  transition: color ${transition};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.PrimaryBrightPurple};
  }
  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 200px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`;
export const MenuButton = styled.button`
  background: transparent;
  border: none;
  transition: background-color ${transition};
`;
