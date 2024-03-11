import { Box, Switch } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box flex="initial" display="flex" alignItems="center" gap="10px">
      <Switch
        colorScheme="green"
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
      />
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Box>
  );
};
