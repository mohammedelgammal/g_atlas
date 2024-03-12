import { Flex } from "@chakra-ui/react";
import Aside from "./Aside/Aside";
import Main from "./Main/Main";

export default (): JSX.Element => {
  return (
    <Flex gap={7}>
      <Aside />
      <Main />
    </Flex>
  );
};
