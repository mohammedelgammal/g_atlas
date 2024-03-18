import { Flex } from "@chakra-ui/react";
import { Logo, Search, ThemeSwitch, Authentication } from "./components";
import useGetMe from "src/hooks/useGetMe";

export default (): JSX.Element => {
  useGetMe();

  return (
    <Flex display="flex" alignItems="center" gap="30px" h="80px">
      <Logo />
      <Search />
      <ThemeSwitch />
      <Authentication />
    </Flex>
  );
};