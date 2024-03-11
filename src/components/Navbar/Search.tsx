import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useShallow } from "zustand/react/shallow";
import useStore from "../../store";
import { useNavigate } from "react-router-dom";

export default (): JSX.Element => {
  const { setSearch, search } = useStore(
    useShallow((state) => ({
      search: state.search,
      setSearch: state.setSearch,
    }))
  );
  const navigate = useNavigate();

  return (
    <Box flex="auto">
      <InputGroup>
        <InputLeftElement>
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          borderRadius="50px"
          onChange={(e) => {
            navigate("/");
            setSearch(e.target.value);
          }}
          variant="filled"
          placeholder="Search"
          value={search}
        />
      </InputGroup>
    </Box>
  );
};
