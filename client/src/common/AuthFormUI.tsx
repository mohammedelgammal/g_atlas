import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Spinner,
  Stack,
  Text,
  Link,
  Alert,
  AlertIcon,
  AlertDescription,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  AuthFormUIProps,
  CallToActionProps,
  ErrorAlertProps,
  InputFieldProps,
  PasswordInputProps,
  SubmitButtonProps,
} from "src/types/FormFields";

const AuthFormUI = ({ children }: AuthFormUIProps) => {
  return <>{children}</>;
};

AuthFormUI.InputField = ({ children, error }: InputFieldProps) => {
  return (
    <Stack>
      {children}
      {error && <Text color="red.500">{error}</Text>}
    </Stack>
  );
};

AuthFormUI.SubmitButton = ({
  isValid,
  isLoading,
  submitText,
}: SubmitButtonProps) => {
  return (
    <Button type="submit" isDisabled={isLoading || !isValid}>
      {isLoading ? <Spinner /> : submitText}
    </Button>
  );
};

AuthFormUI.CallToAction = ({ to, content }: CallToActionProps) => (
  <Link width="fit-content" to={to} as={RouterLink}>
    {content}
  </Link>
);

AuthFormUI.ErrorAlert = ({ isError, error }: ErrorAlertProps): JSX.Element => (
  <>
    {isError && error?.request?.status !== 400 && (
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>{error?.message}</AlertDescription>
      </Alert>
    )}
  </>
);

AuthFormUI.PasswordInput = ({
  isLoading,
  registeration,
}: PasswordInputProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <InputGroup size="md">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        isDisabled={isLoading}
        {...registeration}
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
  );
};

export default AuthFormUI;
