import { Flex, Input, Text } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthFormUI from "src/common/AuthFormUI";
import AuthRoute from "src/common/AuthRoute";
import useLogin from "src/hooks/useLogin";
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
            <AuthFormUI.InputField error={errors?.email?.message}>
              <Input
                type="email"
                placeholder="Email"
                isDisabled={isLoading}
                {...register("email", registerOptions.email)}
              />
            </AuthFormUI.InputField>
            <AuthFormUI.InputField error={errors?.password?.message}>
              <AuthFormUI.PasswordInput
                isLoading={isLoading}
                registeration={register(
                  "password",
                  registerOptions.loginPassword
                )}
              />
            </AuthFormUI.InputField>
            <AuthFormUI.InputField error={errors?.root?.message} />
          </Flex>
          <AuthFormUI.SubmitButton
            isValid={isValid}
            isLoading={isLoading}
            submitText="Login"
          />
          <AuthFormUI.ErrorAlert isError={isError} error={error} />
          <AuthFormUI.CallToAction
            to="/register"
            content="New to our platform? Sign up now and discover more"
          />
        </Flex>
      </form>
    </AuthRoute>
  );
};
