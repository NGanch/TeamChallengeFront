import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

// import { signIn } from '../../redux/auth/auth-operation';
// Import SignInPayload type from your auth-operation file
import { InPayload, signIn } from '../../redux/auth/auth-operation';
import  { useAppDispatch } from '../../redux/hooks';
import { toast } from 'react-toastify';

import FormError from "../FormError/FormError";
import PageTitle from "../PageTitle/PageTitle";
import ModalIcons from "../ModalIcons/ModalIcons";

import {
  SignWrapper,
  AuthForm,
  InputsWrapper,
  Input,
  InputWrap,
  TogglePasswordButton,
  StyledDontShowPasswordIcon,
  StyledShowPasswordIcon,
  Button,
  ErrorIcon,
  SuccessIcon,
  PasswordButton,
  SignDecorText,
  SignText,
} from "../SignupForm/SignupForm.styled";

interface MyFormValues {
  username: string;
  password: string;
}

const initialValues: MyFormValues = { username: "", password: "" };

const schema = Yup.object().shape({
  username: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Email must contain only digits, letters and . - _ symbols. e.g. test@mail.com"
    )
    .email("Invalid email format, test@mail.com")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
});

type Props = {
  handleIsForgotPassword: () => void;
};

const SigninForm = ({ handleIsForgotPassword }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useAppDispatch();

  // const handleSubmit = (
  //   values: MyFormValues,
  //   { resetForm }: { resetForm: () => void }
  // ) => {
  //   const { email, password } = values;
  //   dispatch(signIn({ email, password }))
  //     .unwrap()
  //     .then(() => toast.success('Login  succesfully'))
  //     .catch(() => toast.error('Something went wrong. Try again'));
  //   resetForm();
  // };

  // const handleSubmit = (
  //   values: MyFormValues,
  //   { resetForm }: { resetForm: () => void }
  // ) => {
  //   const { email, password } = values;
  //   dispatch(signIn({ email, password } as { email: string; password: string }))
  //     .unwrap()
  //     .then(() => toast.success('Login  succesfully'))
  //     .catch(() => toast.error('Something went wrong. Try again'));
  //   resetForm();
  // };

  const handleSubmit = (
    values: MyFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const { username, password } = values;
    console.log(values)
    // Dispatch the signIn action with the correct payload type
    dispatch(signIn({ username, password } as InPayload))
      .unwrap()
      .then(() => toast.success('Login successfully'))
      .catch(() => toast.error('Something went wrong. Try again'));

    resetForm();
  };


  return (
    <SignWrapper>
      <PageTitle title={"Sign In"} />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <AuthForm>
            <InputsWrapper>
              <InputWrap>
                <Input
                  type="email"
                  name="username"
                  placeholder="Email"
                  error={errors.username && touched.username ? "true" : "false"}
                  success={values.username && !errors.username ? "true" : "false"}
                />
                <FormError name="username" />
                {errors.username && touched.username ? (
                  <ErrorIcon />
                ) : values.username && !errors.username ? (
                  <SuccessIcon />
                ) : null}
              </InputWrap>
              <InputWrap>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  name="password"
                  placeholder="Password"
                  error={errors.password && touched.password ? "true" : "false"}
                  success={
                    values.password && !errors.password ? "true" : "false"
                  }
                />
                <FormError name="password" />
                {errors.password && touched.password ? (
                  <ErrorIcon />
                ) : values.password && !errors.password ? (
                  <SuccessIcon />
                ) : null}
                <TogglePasswordButton
                  type="button"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <StyledDontShowPasswordIcon />
                  ) : (
                    <StyledShowPasswordIcon />
                  )}
                </TogglePasswordButton>
              </InputWrap>
            </InputsWrapper>
            <PasswordButton type="submit" onClick={handleIsForgotPassword}>
              Forgot your password?
            </PasswordButton>
            <Button type="submit">Sign In</Button>
            <SignDecorText>or by</SignDecorText>
            <ModalIcons />

            <SignText>I don't have an account yet</SignText>
          </AuthForm>
        )}
      </Formik>
    </SignWrapper>
  );
};

export default SigninForm;
