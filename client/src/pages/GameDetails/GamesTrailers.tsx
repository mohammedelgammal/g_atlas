import { Alert, Skeleton } from "@chakra-ui/react";
import useTrailers from "src/hooks/useTrailers";
import { getTrailer } from "src/utils/helpers";
import { TrailersProps } from "src/types/Game";

export default ({ id = "" }: TrailersProps): JSX.Element => {
  const {
    data: trailers,
    error,
    isError,
    isLoading,
  } = useTrailers(parseInt(id));
  const trailer = getTrailer(trailers);

  return (
    <>
      {isLoading && <Skeleton height="300px" />}
      {isError && <Alert status="error">{error.message}</Alert>}
      {trailer && <video src={trailer.src} poster={trailer.poster} controls />}
    </>
  );
};
