import { Table, ScrollArea } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { TH_TABLE_CLIENTS, TR_TABLE_CLIENTS } from "../../constants/clients";
import { ITrTableClients } from "../../types/trTableClients";

const CustomTable = () => {
  const { t } = useTranslation();

  const headerTable = TH_TABLE_CLIENTS.map((thName: string) => (
    <Table.Th ta="center" key={thName}>
      {t(thName)}
    </Table.Th>
  ));

  const rowsTable = TR_TABLE_CLIENTS.map((td: ITrTableClients) => (
    <Table.Tr key={td.id}>
      <Table.Td align="center">{td.fio}</Table.Td>
      <Table.Td align="center">{td.role}</Table.Td>
      <Table.Td align="center">{td.nickname}</Table.Td>
      <Table.Td align="center">{td.phone}</Table.Td>
      <Table.Td align="center">{td.email}</Table.Td>
      <Table.Td align="center">{td.balance}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        layout="fixed"
        striped
      >
        <Table.Thead>
          <Table.Tr>{headerTable}</Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rowsTable}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
};

export default CustomTable;
