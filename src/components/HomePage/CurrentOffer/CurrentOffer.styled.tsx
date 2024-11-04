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

export const CurrentOfferContainer = styled.div`
  margin-left: auto;
  margin-right: 0;
  padding-left: 22px;
  padding-right: 0px;
  min-width: 320px;
  max-width: 375px;

  @media (min-width: 481px) and (max-width: 768px) {
    padding-left: 32px;
    padding-right: 0px;
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

export const CurrentOfferList = styled.ul`
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
    gap: 0;
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const CurrentOfferItem = styled.li<{ color: string }>`
  width: 170px;
  height: 92px;
  border-radius: 12px;
  padding: 11px 10px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightGray};
  background: ${({ color }) => color};
  display: flex;

 
  // @media (max-width: 480px) {
  //   &:last-child {
  //     margin-right: 0;
  //   }
  // }
  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const CurrentOfferDiv = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CurrentOfferImgDiv = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(10%, -50%) rotate(45deg);
  z-index: 1;
  border-radius: 8px;

  @media (min-width: 481px) and (max-width: 768px) {
    width: 143px;
    height: 222px;
    top: 50%;
    left: 50%;
    transform: translate(12%, -56%) rotate(45deg);
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 179px;
    height: 278px;

    border-radius: 12px;
    top: 50%;
    left: 50%;
    transform: translate(22%, -60%) rotate(45deg);
  }
`;

export const CurrentOfferTitle = styled.h5`
  width: 142px;
  height: 24px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  text-align: left;

  margin-bottom: 11px;
  color: ${({ theme }) => theme.PrimaryBlack};

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }
`;

export const CurrentOfferWrapp = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 4px;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }
`;

export const CurrentOfferPrice = styled.p`
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  line-height: 12.58px;
  text-align: left;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 108px;
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
  }
`;
export const CurrentOfferDisc = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.PrimaryWhite};
  font-family: Inter;
  font-size: 8px;
  font-weight: 400;
  line-height: 8.71px;
  text-align: left;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
  }
`;
export const CurrentOfferText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;

  overflow: hidden;
  color: ${({ theme }) => theme.PrimaryBlack};
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 8px;
  font-weight: 300;
  line-height: 7.74px;
  text-align: left;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    text-align: left;
  }
`;

export const CurrentOfferImg = styled.img`
  width: 57px;
  height: 80px;

  position: absolute;
  top: 70%;
  left: 25%;
  transform: translate(-50%, -50%) rotate(-45deg);
  z-index: 1;
  border-radius: 8px;

  @media (min-width: 481px) and (max-width: 768px) {
    width: 82px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-62%, -23%) rotate(-45deg);
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 98px;
    height: 120px;
    top: 50%;
    left: 50%;
    transform: translate(-66%, -11%) rotate(-45deg);
    z-index: 1;
    border-radius: 8px;
  }
`;
