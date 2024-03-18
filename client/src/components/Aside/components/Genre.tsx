import { Flex, Image, Text } from "@chakra-ui/react";
import { useShallow } from "zustand/react/shallow";
import useStore from "src/store";
import useCropImage from "src/hooks/useCropImage";
import { GenreProps } from "src/types/Aside";
import fallBackImage from "src/assets/Image_not_available.png";

export default ({ src, title, slug }: GenreProps): JSX.Element => {
  const { genres, setGenres } = useStore(
    useShallow((state) => ({
      genres: state.genres,
      setGenres: state.setGenres,
    }))
  );

  return (
    <Flex gap={3} alignItems="center">
      <Image
        src={useCropImage(src) || fallBackImage}
        borderRadius="10px"
        w={8}
        h={8}
      />
      <Text
        as="span"
        textAlign="left"
        _hover={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => setGenres(slug)}
        fontWeight={genres === slug ? "bold" : ""}
      >
        {title}
      </Text>
    </Flex>
  );
};
