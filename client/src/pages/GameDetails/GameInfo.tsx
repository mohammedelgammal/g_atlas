import { Alert, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import useGameDetails from "../../hooks/useGameDetails";
import InfoBox from "./InfoBox";
import InfoLoading from "./InfoLoading";
import TruncateText from "../../common/TruncateText";

interface GameInfoProps {
  id: string | undefined;
}

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
          <Text color="gray">
            <TruncateText>{gameDetails?.description_raw}</TruncateText>
          </Text>
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
