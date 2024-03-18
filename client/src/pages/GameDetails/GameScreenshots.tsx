import { Alert, Box, GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "src/hooks/useScreenshots";
import GameScreenshotsLoading from "./GameScreenshotsLoading";
import { GameScreenshotsProps } from "src/types/Game";
import fallBackImage from "src/assets/Image_not_available.png";

export default ({ id = "" }: GameScreenshotsProps): JSX.Element => {
  const { data: screenshots, isLoading, error } = useScreenshots(parseInt(id));

  return (
    <Box>
      {isLoading && <GameScreenshotsLoading />}
      {!!error?.message && <Alert></Alert>}
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        gap={5}
      >
        {screenshots?.results.map(({ id, image }) => (
          <GridItem key={id}>
            <Image src={image || fallBackImage} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};
