import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Button,
  Flex,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import useStore from "../../store";

export default (): JSX.Element => {
  const user = useStore((state) => state.user);
  const handleSignOut = (): void => {
    window.location.href = "/";
    localStorage.removeItem("loginToken");
  };

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Avatar w={10} h={10} cursor="pointer" bg="teal.500" />
        </PopoverTrigger>
        <PopoverContent style={{ padding: "10px 5px", boxShadow: "unset" }}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {!user._id ? (
              <Stack gap={5}>
                <Text>
                  <strong>Welcome to GAtlas!</strong> Please login or register
                  to explore more
                </Text>
                <Flex gap={3}>
                  <Link flex={2} as={RouterLink} to="/login">
                    <Button w={"100%"} borderColor="#f0ac75" variant="outline">
                      Login
                    </Button>
                  </Link>
                  <Link flex={1} as={RouterLink} to="/register">
                    <Button w={"100%"} bg="#f0ac75">
                      Register
                    </Button>
                  </Link>
                </Flex>
              </Stack>
            ) : (
              <Stack gap={5}>
                <Text>
                  <strong>Welcome back, {user.username}!</strong>
                </Text>
                <Button w={"100%"} bg="#f0ac75" onClick={handleSignOut}>
                  Logout
                </Button>
              </Stack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
