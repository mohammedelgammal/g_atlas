import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";
import { ErrorAlertProps } from "src/types/Common";

export default ({ isError, error }: ErrorAlertProps): JSX.Element => (
  <>
    {isError && error?.request?.status !== 400 && (
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>{error?.message}</AlertDescription>
      </Alert>
    )}
  </>
);
