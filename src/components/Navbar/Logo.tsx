import { Box, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default (): JSX.Element => (
  <Link to="/">
    <Box
      flex="initial"
      p="5px"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
      bg="white"
      borderRadius="5px"
    >
      <Icon as={StarIcon} fontSize="30px" color="indianred" />
    </Box>
  </Link>
);
