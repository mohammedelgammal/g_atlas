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
  Stack,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export interface LoginFormFields {
  username: string;
  email: string;
  password: string;
}

export default (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<LoginFormFields>({ mode: "all" });
  const { isLoading, isError, error, mutate } = useLogin(reset, setError);
  const onSubmit: SubmitHandler<LoginFormFields> = ({ email, password }) => {
    mutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={7} flexDir="column">
        <Text fontSize="5xl">Login</Text>
        <Flex gap={4} flexDir="column">
          <Stack>
            <Input
              type="email"
              placeholder="Email"
              isDisabled={isLoading}
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Invalid email",
                },
                maxLength: {
                  value: 50,
                  message: "Email must be less than 50 characters",
                },
                required: "Email is required",
              })}
            />
            <Text color="red.500">{errors.email && errors.email.message}</Text>
          </Stack>
          <Stack>
            <InputGroup size="md">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                isDisabled={isLoading}
                {...register("password", { required: "Password is required" })}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword((show) => !show)}
                  variant="ghost"
                >
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text color="red.500">
              {errors.password && errors.password.message}
            </Text>
          </Stack>
          <Text color="red.500">{errors.root && errors.root.message}</Text>
        </Flex>
        <Button type="submit" isDisabled={isLoading || !isValid}>
          {isLoading ? <Spinner /> : "Sign in"}
        </Button>
        {isError && error.request.status !== 400 && (
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
        <Link width="fit-content" to="/register" as={RouterLink}>
          New to our platform? Sign up now and discover more
        </Link>
      </Flex>
    </form>
  );
};
