import { SimpleGrid, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export default ({ length }: { length: number }): JSX.Element => {
  const skeletons = Array.from({ length }, (v, i): number => (v ? i : i));
  return (
    <SimpleGrid
      marginTop="30px"
      columns={{
        lg: 3,
        md: 2,
        base: 1,
      }}
      spacing={10}
      w="100%"
    >
      {skeletons.map((sk) => (
        <Stack key={sk} spacing={5}>
          <Skeleton height="200px" flex="auto" />
          <SkeletonText mt="2" noOfLines={3} spacing="2" skeletonHeight="5" />
        </Stack>
      ))}
    </SimpleGrid>
  );
};
