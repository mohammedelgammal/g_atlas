import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import useGetMe from "../hooks/useGetMe";

export default (): JSX.Element => {
  const { to } = useParams();
  const navigate = useNavigate();
  
  if (to === "login") navigate("/login");
  else useGetMe();

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
