import { Link } from "react-router-dom";
import { Flex, Image, Text } from "@chakra-ui/react";
import { PRIMARY_COlOR } from "src/constants";
import logo from "src/assets/gatlas.png";

export default (): JSX.Element => (
  <Link to="/">
    <Flex gap={2} alignItems="center">
      <Image src={logo} width={10} height={10} />
      <Flex fontSize={24} fontWeight="bold">
        <Text>G</Text>
        <Text color={PRIMARY_COlOR}>Atlas</Text>
      </Flex>
    </Flex>
  </Link>
);
