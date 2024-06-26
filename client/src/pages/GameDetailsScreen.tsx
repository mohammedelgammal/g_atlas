import { useParams } from "react-router-dom";
import { Flex, Stack } from "@chakra-ui/react";
import { GameInfo, GameScreenshots, GameTrailer } from "src/containers/Game";

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
        <GameTrailer id={params.id} />
        <GameScreenshots id={params.id} />
      </Stack>
    </Flex>
  );
};
