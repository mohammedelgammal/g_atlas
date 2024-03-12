import { SimpleGrid, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export default (): JSX.Element => {
  const skeletons = Array.from({ length: 4 }, (v, i): number => (v ? i : i));

  return (
    <Stack spacing="10px">
      <Skeleton height="36px" />
      <SkeletonText mt="4" noOfLines={10} spacing="3" skeletonHeight="2" />
      <SimpleGrid columns={2} mt={5} gap={8}>
        {skeletons.map((sk) => (
          <Skeleton key={sk} height="200px" width="100%" />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
