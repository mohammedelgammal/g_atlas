import { Flex, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameInfo from "./GameInfo";
import GameScreenshots from "./GameScreenshots";
import GamesTrailers from "./GamesTrailers";

export default (): JSX.Element => {
  const params = useParams();

  return (
    <Flex
      gap={12}
      flexDir={{
        base: "column",
        lg: "row",
      }}
    >
      <GameInfo id={params.id} />
      <Stack flex={1} gap={10}>
        <GamesTrailers id={params.id} />
        <GameScreenshots id={params.id} />
      </Stack>
    </Flex>
  );
};
