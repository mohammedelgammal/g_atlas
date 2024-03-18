import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Flex,
  Input,
  Spinner,
  Text,
  Link,
  Stack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import useRegister from "src/hooks/useRegister";
import AuthRoute from "src/common/AuthRoute";
import { RegisterFormData } from "src/types/Services";
import registerOptions from "src/utils/registerOptions";
import PasswordInput from "src/common/PasswordInput";
import ErrorALert from "src/common/ErrorALert";

export default (): JSX.Element => {
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
    <AuthRoute>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={7} flexDir="column">
          <Text fontSize="5xl">Sign up</Text>
          <Flex gap={4} flexDir="column">
            <Stack>
              <Input
                type="text"
                placeholder="Username"
                isDisabled={isLoading}
                {...register("username", registerOptions.username)}
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
                {...register("email", registerOptions.email)}
              />
              <Text color="red.500">
                {errors.email && errors.email.message}
              </Text>
            </Stack>
            <Stack>
              <PasswordInput
                isLoading={isLoading}
                registeration={register(
                  "password",
                  registerOptions.registerPassword(getValues("email"))
                )}
              />
              <Text color="red.500">
                {errors.password && errors.password.message}
              </Text>
            </Stack>
            <Text color="red.500">{errors.root && errors.root.message}</Text>
          </Flex>
          <Button type="submit" isDisabled={isLoading || !isValid}>
            {isLoading ? <Spinner /> : "Sign up"}
          </Button>
          <ErrorALert isError={isError} error={error} />
          <Link width="fit-content" to="/login" as={RouterLink}>
            Already have an account? Log in.
          </Link>
        </Flex>
      </form>
    </AuthRoute>
  );
};
