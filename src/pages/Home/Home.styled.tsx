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

export const SearchBarWrapper = styled.div`
  margin-bottom: 12px;
  @media (min-width: 481px) and (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
   display: none;
  }
`;
// MenuCatalogue
export const MenuCatalogueWrapper = styled.div`
  display: flex;
  gap: 21px;
`;

export const MenuCatalogueListWrapper = styled.div`
  display: none;
  @media (min-width: 481px) and (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: contents;
  }
`;

// MenuCatalogue

//GarantList
export const GarantList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: none;

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    flex: 0 1 calc(50% - 14px);
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    background: ${({ theme }) => theme.TritiaryLightestGray};
    gap: 0px;
    border-radius: 10px;
  }
`;

export const GarantItem = styled.li`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.TritiaryLightestGray};
  overflow: hidden;

  &.open {
    max-height: 500px;
  }

  &.closed {
    max-height: 54px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 353px;
    padding: 25px 20px;
    justify-content: center;
    background: ${({ theme }) => theme.TritiaryLightestGray};
    border-right: 1px solid #e0e4f0;
    border-radius: 0px;
    gap: 20px;
    &.open {
      max-height: 500px;
      overflow: visible;
    }
  }

  @media (min-width: 1024px) {
    &.open {
      max-height: 500px;
      overflow: visible;
    }
    max-height: none !important; // Робимо список завжди розгорнутим
  }
`;

export const ChildrenWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const GarantTitle = styled.h4`
  width: 160px;
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const GarantText = styled.p`
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 12px;
  line-height: 22px;
  text-align: left;
`;

export const InformationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &.open svg {
    transform: rotate(90deg);
  }

  @media (min-width: 1440px) {
    display: none; // Приховуємо кнопку на великих екранах
  }
`;
//GarantList

// CurrentOffer

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
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const CurrentOfferItem = styled.li<{ color: string }>`
  overflow: hidden;
  position: relative;
  width: 170px;
  height: 92px;
  border-radius: 12px;
  padding: 11px 10px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightGray};
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  flex-shrink: 0;

  /* Для мобільної версії */
  @media (max-width: 480px) {
    &:last-child {
      margin-right: 0;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 238px;
    height: 120px;
    gap: 0px;
    border-radius: 10px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 298px;
    height: 150px;
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
  z-index: 0;
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
  z-index: 1;

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
  z-index: 1;

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
    width: 128px;
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
// CurrentOffer
