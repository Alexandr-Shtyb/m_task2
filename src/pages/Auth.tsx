import AppContainer from "../components/layout/AppContainer";
import { Flex, Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../hooks/redux";
import { login } from "../redux/slices/clientSlice/index";

const Auth = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <AppContainer>
      <Flex pt={100} justify="center" align="center">
        <Button onClick={handleLogin}>{t("authPage.textButtonLogin")}</Button>
      </Flex>
    </AppContainer>
  );
};

export default Auth;
