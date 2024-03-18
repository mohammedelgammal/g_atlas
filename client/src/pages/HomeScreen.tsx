import { Flex } from "@chakra-ui/react";
import Aside from "../components/Aside/Aside";
import Main from "../components/Main/Main";

export default (): JSX.Element => {
  return (
    <Flex gap={7}>
      <Aside />
      <Main />
    </Flex>
  );
};
