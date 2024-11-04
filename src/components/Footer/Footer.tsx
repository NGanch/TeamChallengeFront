import { useState } from "react";
import { Formik } from "formik";

import {
  Logo,
  FooterInstagram,
  FooterTwitter,
  FooterFacebook,
  IconRight,
} from "../../assets/icon/Icons";
import { Container } from "../Container/Container.styled";

import { useTranslation } from "react-i18next";

import * as Yup from "yup";
// import  { useAppDispatch } from '../../redux/hooks';
// import { subscribeEmail } from '../../redux/auth/auth-operation';
// import { AuthUserState } from '../../redux/types/initialEntity';
// import FormError from "../FormError/FormError";
import { FooterMail } from "../../assets/icon/Icons";
import {
  FooterWrapper,
  FooterContainer,
  InfoContainer,
  InfoText,
  InfoIconList,
  InformationContainer,
  InformationWrapper,
  InformationListTitles,
  InformationButton,
  InformationList,
  InformationItem,
  SubscribeContainer,
  SubscribeForm,
  SubscribeWrapperText,
  SubscribeTitle,
  SubscribeText,
  SubscribeField,
  SubscribeButton,
  PolicyContainer,
  PolicyText,
  PolicyList,
  PolicyLink,
} from "./Footer.styled";

interface MyFormValues {
  email: string;
}
const initialValues: MyFormValues = { email: "" };

const schema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Email must contain only digits, letters and . - _ symbols. e.g. test@mail.com"
    )
    .email("Invalid email format, test@mail.com")
    .required("Email is required"),
});

const Footer = () => {
  // const dispatch = useAppDispatch();
  const [isTechEaseOpen, setTechEaseOpen] = useState(false);
  const [isInfoOpen, setInfoOpen] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = () => {};

  // const handleSubmit = (
  //   values: MyFormValues,
  //   { resetForm }: { resetForm: () => void }
  // ) => {
  //   const { email } = values;
  //   dispatch(subscribeEmail({ email } as AuthUserState))

  //   resetForm();
  // };
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <InfoContainer>
            <div>
              <Logo />
              <InfoText>{t("Simplify Your Tech Journey")}</InfoText>
              <InfoIconList>
                <li>
                  <FooterInstagram />
                </li>
                <li>
                  <FooterTwitter />
                </li>
                <li>
                  <FooterFacebook />
                </li>
              </InfoIconList>
            </div>

            <InformationContainer>
              <div>
                <InformationWrapper>
                  <InformationListTitles>TechEase</InformationListTitles>
                  <InformationButton
                    className={isTechEaseOpen ? "open" : ""}
                    onClick={() => setTechEaseOpen(!isTechEaseOpen)}
                  >
                    <IconRight />
                  </InformationButton>
                </InformationWrapper>
                <InformationList
                  className={`${isTechEaseOpen ? "open" : "closed"}`}
                >
                  <InformationItem>{t("About")}</InformationItem>
                  <InformationItem>{t("Vacancies")}</InformationItem>
                  <InformationItem>{t("Customer Support")}</InformationItem>
                </InformationList>
              </div>

              <div>
                <InformationWrapper>
                  <InformationListTitles>
                    {t("Information")}
                  </InformationListTitles>
                  <InformationButton
                    className={isInfoOpen ? "open" : ""}
                    onClick={() => setInfoOpen(!isInfoOpen)}
                  >
                    <IconRight />
                  </InformationButton>
                </InformationWrapper>
                <InformationList
                  className={`${isInfoOpen ? "open" : "closed"}`}
                >
                  <InformationItem>{t("Delivery and payment")}</InformationItem>
                  <InformationItem>{t("Warranty and service")}</InformationItem>
                  <InformationItem>{t("Return and exchange")}</InformationItem>
                  <InformationItem>{t("Credit")}</InformationItem>
                </InformationList>
              </div>
            </InformationContainer>

            {/* <FooterSab /> */}
            <SubscribeContainer>
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched }) => (
                  <SubscribeForm>
                    <SubscribeWrapperText>
                      <SubscribeTitle>
                        Subscribe to our newsletter!
                      </SubscribeTitle>
                      <SubscribeText>We will not bother you :)</SubscribeText>
                    </SubscribeWrapperText>
                    <SubscribeField
                      type="email"
                      name="email"
                      placeholder="example@email.com"
                      error={errors.email && touched.email ? "true" : "false"}
                      success={values.email && !errors.email ? "true" : "false"}
                    />
                    {/* <FormError name="email" /> */}
                    <SubscribeButton type="submit">
                      <FooterMail />
                      Subscribe
                    </SubscribeButton>
                  </SubscribeForm>
                )}
              </Formik>
            </SubscribeContainer>
            {/* <FooterSab /> */}
          </InfoContainer>

          <PolicyContainer>
            <PolicyText>{t("TechEase")}</PolicyText>
            <PolicyList>
              <li>
                <PolicyLink to={`/cookie`}>{t("Cookie Policy")}</PolicyLink>
              </li>
              <li>
                <PolicyLink to={`/privacy`}>{t("Privacy Policy")}</PolicyLink>
              </li>
            </PolicyList>
          </PolicyContainer>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
};
export default Footer;
