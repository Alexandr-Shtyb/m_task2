import { FC, ReactNode } from "react";
import { Container } from "@mantine/core";

type ContainerProps = {
  children: ReactNode;
};

const AppContainer: FC<ContainerProps> = ({ children }) => {
  return <Container maw={1920}>{children}</Container>;
};

export default AppContainer;
