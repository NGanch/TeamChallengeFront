import PageTitle from "../../../shared/SectionTitle/SectionTitle";
import { Section } from "../../Container/Container.styled";

import Offer1 from "../../../assets/offer-1.png";
import Offer2 from "../../../assets/offer-2.png";
import Offer3 from "../../../assets/offer-3.png";
import Offer4 from "../../../assets/offer-4.png";

import {
  CurrentOfferContainer,
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
} from "./CurrentOffer.styled";

import { useTranslation } from "react-i18next";

const CurrentOffer = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <CurrentOfferContainer>
        <PageTitle title={"Current offers"} />
        <CurrentOfferList>
          <CurrentOfferItem color={"#92c1e9"}>
            <CurrentOfferDiv>
              <CurrentOfferTitle>{t("Product of the day")}</CurrentOfferTitle>

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
      </CurrentOfferContainer>
    </Section>
  );
};
export default CurrentOffer;
