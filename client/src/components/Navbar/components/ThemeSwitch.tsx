import { Box, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box flex="initial" display="flex" alignItems="center" gap="10px">
      <Box onClick={toggleColorMode} cursor="pointer">
        {colorMode === "light" ? (
          <MoonIcon color="#3b4073" fontSize={18} />
        ) : (
          <SunIcon color="#fdff86" fontSize={18} />
        )}
      </Box>
    </Box>
  );
};
