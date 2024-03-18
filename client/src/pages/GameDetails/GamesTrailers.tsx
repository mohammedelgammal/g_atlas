import { Alert, Skeleton } from "@chakra-ui/react";
import useTrailers from "../../hooks/useTrailers";

interface TrailersProps {
  id: string | undefined;
}

export default ({ id = "" }: TrailersProps): JSX.Element => {
  const { data, error, isLoading } = useTrailers(parseInt(id));
  const firstTrailer = data?.results[0];

  return (
    <>
      {isLoading && <Skeleton height="300px" />}
      {!!error && <Alert status="error">{error.message}</Alert>}
      {!!firstTrailer && (
        <video
          src={firstTrailer.data[480].toString()}
          poster={firstTrailer.preview}
          controls
        />
      )}
    </>
  );
};
