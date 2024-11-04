import styled from "styled-components";

// @media (min-width: 481px) and (max-width: 768px) {
//   display: none;
//   }

//   /* Tablet (iPad) */
//   @media (min-width: 769px) and (max-width: 1024px) {
//
//   }

//   /* Desktop */
//   @media (min-width: 1024px) and (max-width: 1440px) {
//     display: none;
//   }

export const BrandListList = styled.ul`
  display: flex;
  gap: 12px;
  overflow-x: scroll; /* Додаємо горизонтальний скрол */
  scrollbar-width: none; /* Прибираємо стандартний скрол */
  -ms-overflow-style: none; /* Для Internet Explorer */

  &::-webkit-scrollbar {
    display: none; /* Прибираємо скрол для Chrome, Safari */
  }

  /* Для мобільної версії */
  @media (max-width: 480px) {
    scroll-snap-type: x mandatory; /* Додаємо ефект скролу */
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const BrandListItem = styled.li<{ padding: string }>`
  background: ${({ theme }) => theme.TritiaryLightestGray};
  width: 170px;
  height: auto;

  border-radius: 10px;

  padding: ${({ padding }) => padding};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: flex;
    background: ${({ theme }) => theme.TritiaryLightestGray};
    justify-content: center;
    align-items: center;
  }
`;
export const BrandListImg = styled.img`
  width: auto;
  height: auto;

  /* Адаптація для різних брендів */
  &.samsung {
    width: 99px;
    height: 15px;
  }

  &.apple {
    width: 30px;
    height: 30px;
  }

  &.xiaomi {
    width: 126px;
    height: 33px;
  }

  &.lenovo {
    width: 93px;
    height: 20px;
  }

  &.jbl {
    width: 58px;
    height: 31px;
  }

  &.dyson {
    width: 88px;
    height: 34px;
  }

  &.asus {
    width: 119px;
    height: 34px;
  }

  /* Адаптивність для мобільних пристроїв */
  @media (max-width: 480px) {
    width: 70%;
    height: auto;
  }

  /* Для планшетів */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 85%;
    height: auto;
  }

  /* Для десктопів */
  @media (min-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;
