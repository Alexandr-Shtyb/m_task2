import AppContainer from "../components/layout/AppContainer";
import { Flex, Button, Input, Title, TextInput } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";
import CustomTable from "../components/shared/CustomTable";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();

  return (
    <AppContainer>
      <Title mb="30px" order={1}>
        {t("clientsPage.title")}
      </Title>

      <Flex mb="30px" gap="md" align="center">
        <div>{t("clientsPage.numberClinetsBlock")}: x</div>
        <Button variant="filled">{t("clientsPage.textButtonAddClient")}</Button>
      </Flex>

      <Flex mb="30px" gap="md" align="center">
        <TextInput
          label={t("clientsPage.th_table.phone")}
          placeholder="+ 375 (00) 000-00-00"
        />
        <TextInput label={t("clientsPage.th_table.nickname")} />
        <TextInput label={t("clientsPage.th_table.fullname")} />
      </Flex>

      <Flex gap="md" align="center">
        <Input placeholder="Поиск" leftSection={<IconSearch size={16} />} />
        <Button
          variant="outline"
          leftSection={<IconX size={16} stroke={1.25} />}
        >
          {t("clientsPage.textButtonResetSearch")}
        </Button>
      </Flex>

      <CustomTable />
    </AppContainer>
  );
};

export default Clients;
