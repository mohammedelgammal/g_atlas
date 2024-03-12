import { Alert, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useShallow } from "zustand/react/shallow";
import useGames from "../../hooks/useGames";
import useOnScreen from "../../hooks/useOnScreen";
import useStore from "../../store";
import { Game, GamesLoading } from "./";

export default (): JSX.Element => {
  const { genres, platforms, ordering, search } = useStore(
    useShallow((state) => ({
      genres: state.genres,
      platforms: state.platforms,
      ordering: state.ordering,
      search: state.search,
    }))
  );
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames({
    genres,
    platforms,
    ordering,
    search,
  });
  const { isVisible, containerRef } = useOnScreen<HTMLDivElement>();
  if (hasNextPage && !error && isVisible) fetchNextPage();
  return (
    <>
      {isLoading && <GamesLoading length={10} />}
      {error?.message && <Alert status="error">{error.message}</Alert>}
      {!data?.pages[0].count && !isLoading && (
        <Alert status="error">No matching data</Alert>
      )}
      <SimpleGrid
        columns={{
          lg: 3,
          md: 2,
          base: 1,
        }}
        spacing={5}
      >
        {data?.pages.map((page) =>
          page?.results?.map((game) => <Game key={game.id} {...game} />)
        )}
      </SimpleGrid>
      <Flex ref={containerRef} justifyContent="center" alignItems="center">
        {isFetchingNextPage && (
          <Spinner
            m={5}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </Flex>
    </>
  );
};
