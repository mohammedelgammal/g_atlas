import { Button, Image, Stack, Text } from "@chakra-ui/react";
import { HiHomeModern } from "react-icons/hi2";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import errorBear from "../assets/error_bear.png";

export default () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  return (
    isRouteError && (
      <Stack
        h={"100vh"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image w={"300px"} h={"350px"} src={errorBear} userSelect="none" />
        <Text color="indianred" fontSize="4xl">
          Oooooops!
        </Text>
        <Text color="gray" fontSize="md">
          It looks like you're lost! Make sure you hit the correct url.
        </Text>
        <Button mt={8} onClick={() => navigate("/")}>
          Go Home &nbsp; <HiHomeModern />
        </Button>
      </Stack>
    )
  );
};
