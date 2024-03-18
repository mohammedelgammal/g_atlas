import { Flex, SkeletonCircle, Skeleton, Stack } from "@chakra-ui/react";
import { AsideLoadingProps } from "src/types/Aside";

export default ({ length }: AsideLoadingProps): JSX.Element => {
  const skeletons = Array.from({ length }, (v, i): number => (v ? i : i));
  return (
    <Stack spacing="10px">
      {skeletons.map((sk) => (
        <Flex key={sk} alignItems="center" gap="10px">
          <SkeletonCircle size="32px" flex="initial" />
          <Skeleton height="32px" flex="auto" />
        </Flex>
      ))}
    </Stack>
  );
};
