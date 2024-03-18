import { Flex, Input, Text } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import useRegister from "src/hooks/useRegister";
import AuthRoute from "src/common/AuthRoute";
import { RegisterFormData } from "src/types/Services";
import registerOptions from "src/utils/registerOptions";
import AuthFormUI from "src/common/AuthFormUI";

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
            <AuthFormUI.InputField error={errors?.username?.message}>
              <Input
                type="text"
                placeholder="Username"
                isDisabled={isLoading}
                {...register("username", registerOptions.username)}
              />
            </AuthFormUI.InputField>
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
                  registerOptions.registerPassword(getValues("email"))
                )}
              />
            </AuthFormUI.InputField>
            <AuthFormUI.InputField error={errors?.root?.message} />
          </Flex>
          <AuthFormUI.SubmitButton
            isValid={isValid}
            isLoading={isLoading}
            submitText="Sign up"
          />
          <AuthFormUI.ErrorAlert isError={isError} error={error} />
          <AuthFormUI.CallToAction
            to="/login"
            content="Already have an account? Log in."
          />
        </Flex>
      </form>
    </AuthRoute>
  );
};
