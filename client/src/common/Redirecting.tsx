import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useGetMe from "../hooks/useGetMe";

export default (): JSX.Element => {
  const navigate = useNavigate();

  // After registering redirect to login
  if (!localStorage.getItem("token")) navigate("/login");

  // if user is logged in redirect to home
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
          color="#f0ac75"
          size="xl"
        />
        <Text fontSize="large">Redirecting...</Text>
      </Stack>
    </Flex>
  );
};
