import { Link as RouterLink, useNavigate } from "react-router-dom";
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
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import useStore from "src/store";
import { PRIMARY_COlOR } from "src/constants";
import { AuthenticationProps } from "src/types/Main";

export default ({ isLoading }: AuthenticationProps): JSX.Element => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const handleSignOut = (): void => {
    localStorage.removeItem("loginToken");
    window.location.reload();
    navigate("/");
  };

  return (
    <Popover>
      <PopoverTrigger>
        {isLoading ? (
          <Avatar
            w={10}
            h={10}
            cursor="pointer"
            bg="teal.500"
            icon={<Spinner />}
          />
        ) : (
          <Avatar
            w={10}
            h={10}
            cursor="pointer"
            bg="teal.500"
            name={user.username}
          />
        )}
      </PopoverTrigger>
      <PopoverContent style={{ padding: "10px 5px", boxShadow: "unset" }}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          {!user._id ? (
            <Stack gap={5}>
              <Text>
                <strong>Welcome to GAtlas!</strong> Please login or register to
                explore more
              </Text>
              <Flex gap={3}>
                <Link flex={2} as={RouterLink} to="/login">
                  <Button
                    w={"100%"}
                    borderColor={PRIMARY_COlOR}
                    variant="outline"
                  >
                    Login
                  </Button>
                </Link>
                <Link flex={1} as={RouterLink} to="/register">
                  <Button w={"100%"} bg={PRIMARY_COlOR}>
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
              <Text>
                <strong>
                  <EmailIcon fontSize={"large"} marginTop={-0.5} /> Email
                  Address: <br />
                </strong>
                {user.email}
              </Text>
              <Button w={"100%"} bg={PRIMARY_COlOR} onClick={handleSignOut}>
                Logout
              </Button>
            </Stack>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
