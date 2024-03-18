import { Flex } from "@chakra-ui/react";
import { Aside, Main } from "src/containers";

export default (): JSX.Element => {
  return (
    <Flex gap={7}>
      <Aside />
      <Main />
    </Flex>
  );
};
