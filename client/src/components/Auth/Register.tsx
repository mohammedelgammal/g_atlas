import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Flex,
  Input,
  Spinner,
  Text,
  Link,
} from "@chakra-ui/react";
import useRegister from "../../hooks/useRegister";

export default (): JSX.Element => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { error, isError, isLoading, mutate } = useRegister();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      username: usernameRef.current!.value,
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap={7} flexDir="column">
        <Text fontSize="5xl">Sign up</Text>
        <Flex gap={4} flexDir="column">
          <Input
            type="text"
            ref={usernameRef}
            placeholder="Username"
            isRequired
            isDisabled={isLoading}
          />
          <Input
            type="email"
            ref={emailRef}
            placeholder="Email Address"
            isRequired
            isDisabled={isLoading}
          />
          <Input
            type="password"
            ref={passwordRef}
            placeholder="Create a Password"
            isRequired
            isDisabled={isLoading}
          />
        </Flex>
        <Button type="submit" isDisabled={isLoading}>
          {isLoading ? <Spinner /> : "Sign up"}
        </Button>
        {isError && (
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>{error.response.data.message}</AlertDescription>
          </Alert>
        )}
        <Link width="fit-content" to="/login" as={RouterLink}>
          Already have an account? Log in.
        </Link>
      </Flex>
    </form>
  );
};
