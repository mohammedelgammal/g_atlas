import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import useSearchDebounce from "../../hooks/useSearchDebounce";

export default (): JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const debouncedSearch = useSearchDebounce(term, 500);

  return (
    <Box flex="auto">
      <InputGroup>
        <InputLeftElement>
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          borderRadius="50px"
          onChange={(e) => setTerm(e.target.value)}
          variant="filled"
          placeholder="Search"
          value={debouncedSearch}
        />
      </InputGroup>
    </Box>
  );
};
