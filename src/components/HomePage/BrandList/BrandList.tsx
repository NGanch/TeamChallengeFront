import PageTitle from "../../../shared/SectionTitle/SectionTitle";
import { Section, SecondContainer } from "../../Container/Container.styled";

import Samsung from "../../../assets/img/samsung.png";
import Apple from "../../../assets/img/apple.png";
import Xiaomi from "../../../assets/img/xiaomi.png";
import Lenovo from "../../../assets/img/lenovo.png";
import Jbl from "../../../assets/img/jbl.png";
import Dyson from "../../../assets/img/dyson.png";
import Asus from "../../../assets/img/bank_pumb.png";

import { BrandListList, BrandListItem } from "./BrandList.styled";

const BrandList = () => {
  return (
    <Section>
      <SecondContainer>
        <PageTitle title={"Popular brands"} />
        <BrandListList>
          <BrandListItem padding="37px 36px">
            <img src={Samsung} width="99" height="15" />
          </BrandListItem>
          <BrandListItem padding="23px 36px">
            <img src={Apple} width="42" height="43" />
          </BrandListItem>
          <BrandListItem padding="28px 36px">
            <img src={Xiaomi} width="126" height="33" />
          </BrandListItem>
          <BrandListItem padding="35px 36px">
            <img src={Lenovo} width="93" height="20" />
          </BrandListItem>
          <BrandListItem padding="28px 36px">
            <img src={Dyson} width="88" height="34" />
          </BrandListItem>
          <BrandListItem padding="28px 36px">
            <img src={Asus} width="119" height="34" />
          </BrandListItem>
          <BrandListItem padding="24px 36px">
            <img src={Jbl} width="58" height="31" />
          </BrandListItem>
        </BrandListList>
      </SecondContainer>
    </Section>
  );
};
export default BrandList;
