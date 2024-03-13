import { useRef } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/useRegister";

export default (): JSX.Element => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { data, isLoading, error, isSuccess, mutate } = useRegister();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      data: {
        username: usernameRef.current?.value,
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
        <Text fontSize="5xl">Sign up</Text>
        <Flex gap={4} flexDir="column">
          <Input
            type="text"
            ref={usernameRef}
            placeholder="Username"
            isRequired
          />
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
        <Link to="/login">Already have an account? Log in.</Link>
      </Flex>
    </form>
  );
};
