import { Box, Text } from "@chakra-ui/react";
import _ from "lodash";
import useStore from "src/store";
import { GamesGrid, SelectedFilters } from "./components";
import { getSelectedGenres } from "src/utils/formatters";

export default (): JSX.Element => {
  const genre = useStore((s) => s.genres);
  const genresFilter = getSelectedGenres(genre);

  return (
    <Box flex={1}>
      <Box mb={10}>
        <Text fontSize="5xl" fontWeight="bold" as="h2" mb={5}>
          {genresFilter}
        </Text>
        <SelectedFilters />
      </Box>
      <GamesGrid />
    </Box>
  );
};
