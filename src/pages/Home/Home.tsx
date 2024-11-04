import { useEffect, useState } from "react";
// import { useAppDispatch } from "@/redux/hooks";
// import { getMainDevises } from "@/redux/products/products-operation";
// import { useProduct } from "@/redux/hooks/usePeoduct";
// import { useResize } from '../../hooks/useResize';

import PageTitle from "../../shared/SectionTitle/SectionTitle";

import Offer1 from "../../assets/img/offer-1.png";
import Offer2 from "../../assets/img/offer-2.png";
import Offer3 from "../../assets/img/offer-3.png";
import Offer4 from "../../assets/img/offer-4.png";

// import MenuCatalogue from "@/components/MenuCatalogue/MenuCatalogue";
import MenuCatalogueList from "@/components/MenuCatalogue/MenuCatalogueList";
import Slider from "@/components/Slider/Slider";
import SearchBar from "@/components/SearchBar/SearchBar";
// import CurrentOffer from "@/components/HomePage/CurrentOffer/CurrentOffer";

import BrandList from "@/components/HomePage/BrandList/BrandList";
import PhoneCardList from "@/components/PhoneCardList/PhoneCardList";
import SectionTitle from "@/shared/SectionTitle/SectionTitle";
// import Loader from "@/components/Loader/Loader";

import mainProduct from "../../data/phonecardlist.json";

import {
  GarantCar,
  GarantProcent,
  GarantShield,
  GarantLayers,
  IconRight,
} from "@/assets/icon/Icons";

import {
  MainSection,
  Section,
  Container,
  SecondContainer,
} from "@/components/Container/Container.styled";

import { useTranslation } from "react-i18next";

import {
  SearchBarWrapper,
  MenuCatalogueWrapper,
  MenuCatalogueListWrapper,
  // CurrentOffer
  CurrentOfferList,
  CurrentOfferItem,
  CurrentOfferDiv,
  CurrentOfferTitle,
  CurrentOfferWrapp,
  CurrentOfferPrice,
  CurrentOfferDisc,
  CurrentOfferText,
  CurrentOfferImgDiv,
  CurrentOfferImg,
  // CurrentOffer
  GarantList,
  GarantItem,
  ChildrenWrapp,
  ContentWrapp,
  GarantTitle,
  GarantText,
  InformationButton,
} from "./Home.styled";

const Home = () => {
  const { t } = useTranslation();
  // const dispatch = useAppDispatch();
  // const { mainProduct, isLoading } = useProduct();

  // const { width } = useResize();

  // const pageNumbersToShow = width < 768 ? 5 : 8;
  // const itemsPerPage = width < 1440 ? 10 : 9;

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  // Логіка для автоматичного відкриття елементів при 1440px
  useEffect(() => {
    if (window.innerWidth >= 1440) {
      setOpenItems([0, 1, 2, 3]); // Відкрити всі елементи
    }
  }, []);

  // useEffect(() => {
  //   dispatch(getMainDevises());
  // }, [dispatch]);

  // const mainProduct: MainProductState[] = useAppSelector((state) => {
  //   return state.products.productsList;
  // });

  // console.log("devices/main-page", mainProduct);

  const style = {
    fill: "#5826DA",
  };
  return (
    <MainSection>
      <div>
        {/* <MenuCatalogue /> */}
        <Section>
          <Container>
          <SearchBarWrapper>
            <SearchBar />
          </SearchBarWrapper>
            <MenuCatalogueWrapper>
              <MenuCatalogueListWrapper>
              <MenuCatalogueList />
              </MenuCatalogueListWrapper>
             
              <Slider />
            </MenuCatalogueWrapper>
          </Container>
        </Section>
        {/* <MenuCatalogue /> */}
        {/* // CurrentOffer */}
        {/* <CurrentOffer /> */}
        <Section>
          <SecondContainer>
            <PageTitle title={"Current offers"} />
            <CurrentOfferList>
              <CurrentOfferItem color={"#92c1e9"}>
                <CurrentOfferDiv>
                  <CurrentOfferTitle>
                    {t("Product of the day")}
                  </CurrentOfferTitle>

                  <CurrentOfferWrapp>
                    <CurrentOfferPrice>7 599 ₴</CurrentOfferPrice>
                    <CurrentOfferDisc>10 599 ₴</CurrentOfferDisc>
                  </CurrentOfferWrapp>

                  <CurrentOfferText>
                    {t("Marshall Stockwell II Portable Speaker Black")}
                  </CurrentOfferText>
                </CurrentOfferDiv>

                <CurrentOfferImgDiv>
                  <CurrentOfferImg src={Offer1} />
                </CurrentOfferImgDiv>
              </CurrentOfferItem>

              <CurrentOfferItem color={"#FFF66A"}>
                <CurrentOfferDiv>
                  <CurrentOfferTitle>{t("Sales")}</CurrentOfferTitle>
                  <CurrentOfferWrapp>
                    <CurrentOfferPrice>{t("from")} 990 ₴</CurrentOfferPrice>
                  </CurrentOfferWrapp>

                  <CurrentOfferText>
                    {t("Smart Watch GOGPS ME K11")}
                  </CurrentOfferText>
                </CurrentOfferDiv>

                <CurrentOfferImgDiv>
                  <CurrentOfferImg src={Offer2} />
                </CurrentOfferImgDiv>
              </CurrentOfferItem>

              <CurrentOfferItem color={"#F2994A"}>
                <CurrentOfferDiv>
                  <CurrentOfferTitle>{t("Discounts")}</CurrentOfferTitle>
                  <CurrentOfferWrapp>
                    <CurrentOfferPrice>20 990 ₴</CurrentOfferPrice>
                    <CurrentOfferDisc>27 990 ₴</CurrentOfferDisc>
                  </CurrentOfferWrapp>

                  <CurrentOfferText>{t("Laptop HP 15")}</CurrentOfferText>
                </CurrentOfferDiv>

                <CurrentOfferImgDiv>
                  <CurrentOfferImg src={Offer3} />
                </CurrentOfferImgDiv>
              </CurrentOfferItem>

              <CurrentOfferItem color={"#CBC2F2"}>
                <CurrentOfferDiv>
                  <CurrentOfferTitle>{t("Top offers")}</CurrentOfferTitle>
                  <CurrentOfferWrapp>
                    <CurrentOfferPrice>{t("from")} 1 599 ₴</CurrentOfferPrice>
                  </CurrentOfferWrapp>

                  <CurrentOfferText>
                    {t("ZTE BLADE L9 1/32GB Dual Sim Gray")}
                  </CurrentOfferText>
                </CurrentOfferDiv>

                <CurrentOfferImgDiv>
                  <CurrentOfferImg src={Offer4} />
                </CurrentOfferImgDiv>
              </CurrentOfferItem>
            </CurrentOfferList>
          </SecondContainer>
        </Section>
        {/* // CurrentOffer */}

        <BrandList />
        {/* {isLoading && <Loader />} */}
        <Section>
          <Container>
            {mainProduct && (
              <>
                {mainProduct.map(({ title, devices }) => (
                  <Section>
                    <SectionTitle title={title} />

                    <PhoneCardList devices={devices} />
                  </Section>
                ))}
              </>
            )}
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionTitle title={"Why TechEase?"} />
            <GarantList>
              {[
                {
                  title: t("Delivery and customer service"),
                  text: t("Fast and reliable delivery"),
                  icon: <GarantCar style={style} />,
                },
                {
                  title: t("Competitive prices"),
                  text: t("Offers and discounts"),
                  icon: <GarantProcent />,
                },
                {
                  title: t("Reliability and warranty"),
                  text: t("Quality assurance"),
                  icon: <GarantShield style={style} />,
                },
                {
                  title: t("Wide range of products"),
                  text: t("Providing a variety"),
                  icon: <GarantLayers />,
                },
              ].map((item, index) => (
                <GarantItem
                  key={index}
                  className={openItems.includes(index) ? "open" : "closed"}
                >
                  <ChildrenWrapp>
                    <ContentWrapp>
                      {item.icon}
                      <GarantTitle>{item.title}</GarantTitle>
                    </ContentWrapp>
                    <InformationButton
                      className={openItems.includes(index) ? "open" : ""}
                      onClick={() => toggleItem(index)}
                    >
                      <IconRight />
                    </InformationButton>
                  </ChildrenWrapp>
                  {openItems.includes(index) && (
                    <GarantText>{item.text}</GarantText>
                  )}
                </GarantItem>
              ))}
            </GarantList>
          </Container>
        </Section>
      </div>
    </MainSection>
  );
};
export default Home;
