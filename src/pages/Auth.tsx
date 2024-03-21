import { db, auth, googleProvider } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import AppContainer from "../components/layout/AppContainer";
import { Flex, Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Auth = () => {
  const { t } = useTranslation();

  const login = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      await addDoc(collection(db, "users"), {
        name: user.displayName,
        email: user.email,
        role: "user",
      });
      console.log(user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AppContainer>
      <Flex pt={100} justify="center" align="center">
        <Button onClick={login}>{t("authPage.textButtonLogin")}</Button>
      </Flex>
    </AppContainer>
  );
};

export default Auth;
