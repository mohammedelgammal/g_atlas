import { Flex, Image, Text } from "@chakra-ui/react";
import { useShallow } from "zustand/react/shallow";
import useCropImage from "../../hooks/useCropImage";
import useStore from "../../store";
import fallBackImage from "../../assets/Image_not_available.png";

interface GenreProps {
  src: string;
  title: string;
  slug: string;
}

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
