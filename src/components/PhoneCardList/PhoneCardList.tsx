import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleLike } from "@/redux/products/likeReducer";
import { addProductToCart } from "@/redux/products/cartReducer";
import { DevicesState } from "../../redux/types/initialEntity";

import CartModal from "../CartModal/CartModal";
import { Like, Compare, Cart, NotLike } from "../../assets/icon/Icons";
import {
  // SliderContainer,
  // SliderItem,
  CardList,
  CardItem,
  DealText,
  MainDevisImageDiv,
  MainDevisIMG,
  MainDevisBtnDiv,
  MainDevisBtn,
  CardDiv,
  TitleLinkWrapp,
  TitleLink,
  PriceText,
  DiscountContainer,
  DealTextBtn,
  DiscountDiv,
  DiscountPrice,
} from "./PhoneCardList.styled";

import noImage from "@/assets/no-image.png";
const style = {
  fill: "#5826da",
};

type PhoneCardListProps = {
  devices: DevicesState[];
};

const PhoneCardList: React.FC<PhoneCardListProps> = ({ devices }) => {
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);

  const [openCardItems, setOpenCardItems] = useState(devices.slice(0, 4));

  const isLiked = useAppSelector((state) => state.productsLikeState ?? false);
  const dispatch = useAppDispatch();

  const handleToggleCartModal = (id: string) => {
    dispatch(addProductToCart({ id }));
    setIsOpenCartModal(true);
  };

  const updateCardItems = () => {
    const width = window.innerWidth;

    if (width < 1024) {
      // Для мобільних і планшетів (до 1024px)
      setOpenCardItems(devices.slice(0, 4)); // Відображаємо 4 картки
    } else {
      // Для десктопів (1024px і більше)
      setOpenCardItems(devices.slice(0, 5)); // Відображаємо 5 карток
    }
  };

  // Використання useEffect для обробки зміни розміру вікна
  useEffect(() => {
    updateCardItems(); // Ініціалізація при завантаженні
    window.addEventListener("resize", updateCardItems);

    return () => {
      window.removeEventListener("resize", updateCardItems);
    };
  }, []);

  return (
    <>
      <CardList>
        {openCardItems.length > 0 &&
          openCardItems.map(
            ({ id, title, mainPhotoUri, price, deal, discount }) => (
              <CardItem key={id}>
                <DealText>-{deal}%</DealText>
                <CardDiv>
                  <MainDevisImageDiv>
                    <MainDevisIMG src={mainPhotoUri || noImage} alt={title} />
                    <MainDevisBtnDiv>
                      <MainDevisBtn
                        onClick={() => {
                          dispatch(toggleLike(id));
                        }}
                      >
                        {isLiked[id] ? <Like /> : <NotLike />}
                      </MainDevisBtn>
                      <MainDevisBtn>
                        <Compare />
                      </MainDevisBtn>
                    </MainDevisBtnDiv>
                  </MainDevisImageDiv>
                  <TitleLinkWrapp>
                    <TitleLink to={`/product/${id}`}>{title}</TitleLink>
                  </TitleLinkWrapp>
                  <PriceText>{price}</PriceText>
                  <DiscountContainer>
                    <DiscountDiv>
                      <DiscountPrice>{discount}</DiscountPrice>
                      {/* <DiscountPrice>{`${(price - (price * 8) / 100)}`}</DiscountPrice> */}
                    </DiscountDiv>
                    <DealTextBtn>-{deal}%</DealTextBtn>
                    <MainDevisBtn onClick={() => handleToggleCartModal(id)}>
                      <Cart style={style} />
                    </MainDevisBtn>
                  </DiscountContainer>
                </CardDiv>
              </CardItem>
            )
          )}
      </CardList>
      <CartModal
        isOpen={isOpenCartModal}
        handleClose={() => setIsOpenCartModal(false)}
      />
    </>
  );
};

export default PhoneCardList;
