import { Alert, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import useGameDetails from "src/hooks/useGameDetails";
import { InfoBox, InfoLoading } from "./components";
import TruncateText from "src/common/TruncateText";
import { GameInfoProps } from "src/types/Game";

export default ({ id = "" }: GameInfoProps): JSX.Element => {
  const {
    data: gameDetails,
    isLoading,
    error,
    isSuccess,
  } = useGameDetails(parseInt(id));
  return (
    <SimpleGrid flex={1}>
      {isLoading && <InfoLoading />}
      {!!error?.message && <Alert>{error.message}</Alert>}
      {isSuccess && (
        <Stack>
          <Text fontSize="5xl" fontWeight="bold">
            {gameDetails?.name}
          </Text>
          <TruncateText>{gameDetails?.description_raw}</TruncateText>
          <SimpleGrid columns={2} mt={8}>
            <InfoBox
              title="Platforms"
              list={
                gameDetails?.platforms.map(({ platform }) => platform.name) ||
                []
              }
            />
            <InfoBox
              title="Metascore"
              list={gameDetails?.metacritic?.toString() || ""}
            />
            <InfoBox
              title="Genres"
              list={gameDetails?.genres.map((genre) => genre.name) || []}
            />
            <InfoBox
              title="Publishers"
              list={
                gameDetails?.publishers.map((publisher) => publisher.name) || []
              }
            />
          </SimpleGrid>
        </Stack>
      )}
    </SimpleGrid>
  );
};
