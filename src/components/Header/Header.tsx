// import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { Container } from "../Container/Container.styled";

import ChangeModal from "../ChangeModal/ChangeModal";
import HeaderCatalogueModal from "../ListofModals/HeaderCatalogueModal";

// import BurgerModal from "../ListofModals/HeaderCatalogueModal";

import MenuCatalogueList from "../MenuCatalogue/MenuCatalogueList";

import SearchBar from "../SearchBar/SearchBar";

import Modal from "../../shared/Modal/Modal";

import {
  Logo,
  Compare,
  NotLike,
  User,
  Cart,
  Catalogue,
  BurgerMenu,
  IconRight,
} from "../../assets/icon/Icons";

import {
  HeaderInnerWrapper,
  MobileBurgerWrapper,
  HeaderWrapper,
  LogoCatalogueWrapper,
  SecondBurgerWrapper,
  IconWrapper,
  CatalogueButtonWrapper,
  SearchBarWrapper,
  CatalogueButton,
  CatalogueBtnText,
  LogoLink,
  IconsLink,
  OpenModalButton,
  LikesCounter,
  BurgerModalWrapper,
  BurgerModalLinkWrapp,
  BurgerModalCatalogueWrapp,
  BurgerModalButton,
  BurgerModalText,
  BurgerModalLink,
  BurgerModalList,
} from "./Header.styled";

const style = {
  fill: "#5826da",
};

const Header = () => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenBurgerModal, setIsOpenBurgerModal] = useState(false);
  const [isOpenModalHeader, setIsOpenModalHeader] = useState(false);
  const [isSwitchMenu, setIsSwitchMenu] = useState(false);

  const isLogged = useAppSelector((state) => {
    return state.auth.isLoggedIn;
  });

  const handleToggleUserModal = () => {
    if (isLogged) {
      setIsOpenModal(false);
      navigate("/user");
    } else {
      setIsOpenModal(true);
    }
  };
  const handleCloseUserModal = () => {
    setIsOpenModal((state) => !state);
  };

  const handleToggleHeaderModal = () => {
    setIsOpenModalHeader((state) => !state);
  };
  const handleToggleBurgerModal = () => {
    setIsOpenBurgerModal((state) => !state);
  };

  const handleTogglesetSwitchMenu = () => {
    setIsSwitchMenu((state) => !state);
  };
  const Likes = useAppSelector((state) => state.productsLikeState ?? false);
  // console.log(
  //   "(Object.keys(Likes).length =",
  //   Object.values(Likes).filter(value => value === true).length
  // );

  return (
    <HeaderWrapper>
      <Container>
        <HeaderInnerWrapper>
          <MobileBurgerWrapper onClick={handleToggleBurgerModal}>
            <BurgerMenu />
          </MobileBurgerWrapper>
          <LogoCatalogueWrapper>
            <LogoLink to="/home">
              <Logo />
            </LogoLink>

            <CatalogueButtonWrapper>
              <CatalogueButton onClick={handleToggleHeaderModal}>
                <Catalogue />
                <CatalogueBtnText>Catalogue</CatalogueBtnText>
              </CatalogueButton>
            </CatalogueButtonWrapper>
          </LogoCatalogueWrapper>

          <SearchBarWrapper>
            <SearchBar />
          </SearchBarWrapper>
          <IconWrapper>
            <LanguageSwitcher />
          </IconWrapper>

          <IconWrapper>
            <OpenModalButton onClick={handleToggleUserModal}>
              <User />
            </OpenModalButton>
          </IconWrapper>

          <IconWrapper>
            <IconsLink to="/">
              <Compare />
            </IconsLink>
          </IconWrapper>

          <IconWrapper>
            <IconsLink to="/#">
              <NotLike />
              <LikesCounter
                likesCount={
                  Object.values(Likes).filter((value) => value === true)
                    .length > 0
                }
              >
                {Object.values(Likes).filter((value) => value === true).length}
              </LikesCounter>
            </IconsLink>
          </IconWrapper>

          <IconsLink to="/cart">
            <Cart style={style} />
          </IconsLink>

          <SecondBurgerWrapper onClick={handleToggleBurgerModal}>
            <BurgerMenu />
          </SecondBurgerWrapper>
        </HeaderInnerWrapper>

        <ChangeModal isOpen={isOpenModal} handleClose={handleCloseUserModal} />
        <HeaderCatalogueModal
          isOpen={isOpenModalHeader}
          handleClose={handleToggleHeaderModal}
        />

        <Modal
          isOpen={isOpenBurgerModal}
          handleClose={handleToggleBurgerModal}
          variant={"burgersmall"}
        >
          <BurgerModalWrapper>
            <BurgerModalLinkWrapp>
              <BurgerModalLink to="/home">
                <Logo />
              </BurgerModalLink>
            </BurgerModalLinkWrapp>

            <BurgerModalCatalogueWrapp>
              <BurgerModalText>Catalogue</BurgerModalText>
              <BurgerModalButton onClick={handleTogglesetSwitchMenu}>
                <IconRight />
              </BurgerModalButton>
            </BurgerModalCatalogueWrapp>
            {isSwitchMenu ? (
              <div>
                <MenuCatalogueList />
              </div>
            ) : (
              <BurgerModalList>
                <li>
                  <BurgerModalLink to="/">
                    <BurgerModalText>Profile</BurgerModalText>
                  </BurgerModalLink>
                </li>
                <li>
                  <BurgerModalLink to="/">
                    <BurgerModalText>Favorites</BurgerModalText>
                  </BurgerModalLink>
                </li>
                <li>
                  <BurgerModalLink to="/">
                    <BurgerModalText>Comparison</BurgerModalText>
                  </BurgerModalLink>
                </li>
              </BurgerModalList>
            )}

            <LanguageSwitcher />
          </BurgerModalWrapper>
        </Modal>
      </Container>
    </HeaderWrapper>
  );
};
export default Header;
