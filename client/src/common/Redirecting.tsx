import { useNavigate } from "react-router-dom";
import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import useGetMe from "../hooks/useGetMe";
import { PRIMARY_COlOR } from "src/constants";

export default (): JSX.Element => {
  const navigate = useNavigate();

  // After registering redirect to login
  if (!localStorage.getItem("token")) navigate("/login");
  // if user is already logged in validate the token
  useGetMe();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height={"calc(100vh - 150px)"}
    >
      <Stack gap={5} alignItems="center">
        <Spinner
          thickness="4px"
          speed="0.80s"
          emptyColor="gray.200"
          color={PRIMARY_COlOR}
          size="xl"
        />
        <Text fontSize="large">Redirecting...</Text>
      </Stack>
    </Flex>
  );
};
