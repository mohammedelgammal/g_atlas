import { useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { PasswordInputProps } from "src/types/Common";

export default ({
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
