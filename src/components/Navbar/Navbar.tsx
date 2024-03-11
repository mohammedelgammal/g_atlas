import { Flex } from "@chakra-ui/react";
import { Logo, Search, ThemeSwitch } from "./";

export default (): JSX.Element => {
  return (
    <Flex display="flex" alignItems="center" gap="30px" h="80px">
      <Logo />
      <Search />
      <ThemeSwitch />
    </Flex>
  );
};
