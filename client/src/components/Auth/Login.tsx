import { useRef } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

export default (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { data, isLoading, error, mutate } = useLogin();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      data: {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      },
    });
    console.log("data", data);
    console.log("isLoading", isLoading);
    console.log("error", error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap={7} flexDir="column">
        <Text fontSize="5xl">Login</Text>
        <Flex gap={4} flexDir="column">
          <Input
            type="email"
            ref={emailRef}
            placeholder="Email Address"
            isRequired
          />
          <Input
            type="password"
            ref={passwordRef}
            placeholder="Create a Password"
            isRequired
          />
        </Flex>
        <Button type="submit">Sign up</Button>
        <Link to="/register">Don't have an account? Sign up.</Link>
      </Flex>
    </form>
  );
};
