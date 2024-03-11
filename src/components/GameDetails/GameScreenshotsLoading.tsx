import { SimpleGrid, Skeleton } from "@chakra-ui/react";

export default (): JSX.Element => {
  const skeletons = Array.from({ length: 8 }, (v, i): number => (v ? i : i));
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
