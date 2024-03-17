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
import useRegister from "../../hooks/useRegister";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

export default (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    getValues,
    setError,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<RegisterFormData>({ mode: "all" });
  const { isLoading, error, isError, mutate } = useRegister(reset, setError);
  const onSubmit: SubmitHandler<RegisterFormData> = ({
    username,
    email,
    password,
  }) => {
    mutate({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={7} flexDir="column">
        <Text fontSize="5xl">Sign up</Text>
        <Flex gap={4} flexDir="column">
          <Stack>
            <Input
              type="text"
              placeholder="Username"
              isDisabled={isLoading}
              {...register("username", {
                required: "Username is required",
                maxLength: {
                  value: 20,
                  message: "Username must be less than 20 characters",
                },
                minLength: {
                  value: 3,
                  message: "Username must be more than 3 characters",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_]*$/,
                  message: "Username can only contain letters, numbers, and _",
                },
              })}
            />

            <Text color="red.500">
              {errors.username && errors.username.message}
            </Text>
          </Stack>
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
                {...register("password", {
                  required: "Password is required",
                  validate: (value) => {
                    return value.length < 8
                      ? "Password must be at least 8 characters"
                      : !/[A-Z]/.test(value)
                      ? "Password must contain at least one uppercase letter"
                      : !/[a-z]/.test(value)
                      ? "Password must contain at least one lowercase letter"
                      : !/[0-9]/.test(value)
                      ? "Password must contain at least one number"
                      : !/[^A-Za-z0-9]/.test(value)
                      ? "Password must contain at least one special character"
                      : getValues("email") === value
                      ? "Password must be different from email"
                      : true;
                  },
                })}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword((show) => !show)}
                  variant="ghost"
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
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
          {isLoading ? <Spinner /> : "Sign up"}
        </Button>
        {isError && error.request.status !== 400 && (
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
        <Link width="fit-content" to="/login" as={RouterLink}>
          Already have an account? Log in.
        </Link>
      </Flex>
    </form>
  );
};
