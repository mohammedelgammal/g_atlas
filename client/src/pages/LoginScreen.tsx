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
import AuthRoute from "src/common/AuthRoute";
import useLogin from "src/hooks/useLogin";
import PasswordInput from "src/common/PasswordInput";
import ErrorALert from "src/common/ErrorALert";
import registerOptions from "src/utils/registerOptions";
import { LoginFormFields } from "src/types/FormFields";

export default (): JSX.Element => {
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
    <AuthRoute>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={7} flexDir="column">
          <Text fontSize="5xl">Login</Text>
          <Flex gap={4} flexDir="column">
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
                  registerOptions.loginPassword
                )}
              />
              <Text color="red.500">
                {errors.password && errors.password.message}
              </Text>
            </Stack>
            <Text color="red.500">{errors.root && errors.root.message}</Text>
          </Flex>
          <Button type="submit" isDisabled={isLoading || !isValid}>
            {isLoading ? <Spinner /> : "Sign in"}
          </Button>
          <ErrorALert isError={isError} error={error} />
          <Link width="fit-content" to="/register" as={RouterLink}>
            New to our platform? Sign up now and discover more
          </Link>
        </Flex>
      </form>
    </AuthRoute>
  );
};
