import { Outlet } from "react-router-dom";
import { Navbar } from "./containers";
import { Stack } from "@chakra-ui/react";

export default (): JSX.Element => {
  return (
    <Stack spacing={7} px={5} maxW="1440px">
      <Navbar />
      <Outlet />
    </Stack>
  );
};
