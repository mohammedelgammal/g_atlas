import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { getLoadingSkeleton } from "src/utils/helpers";

export default (): JSX.Element => {
  const skeletons = getLoadingSkeleton(8);

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      gap={5}
    >
      {skeletons.map((sk) => (
        <Skeleton key={sk} height="200px" width="100%" />
      ))}
    </SimpleGrid>
  );
};
