import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
  Wrap,
} from "@chakra-ui/react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Game } from "../../services/gamesServices";
import Emoji from "./Emoji";
import { iconsMap } from "./data";
import fallBackImage from "../../assets/Image_not_available.png";

export default ({
  id,
  name,
  rating,
  rating_top,
  background_image,
  released,
  added,
  tba,
}: Game): JSX.Element => {
  return (
    <Link to={`games/${id}`}>
      <Card
        variant="elevated"
        borderRadius={"20px"}
        colorScheme={tba ? "whiteAlpha" : "blackAlpha"}
        height="500px"
      >
        <CardBody p={0}>
          <Image
            w={"100%"}
            h={200}
            src={background_image || fallBackImage}
            borderRadius="20px 20px 0 0"
          />
        </CardBody>
        <CardFooter>
          <Stack width="100%">
            <Wrap justifyContent="space-between">
              <Wrap>
                {_.range(0, _.random(0, iconsMap.length)).map((icon, index) => (
                  <Icon color="gray.500" key={index} as={iconsMap[icon]} />
                ))}
              </Wrap>
              <Tag borderRadius="full" variant="solid" colorScheme="green">
                {added}
              </Tag>
              <Tag borderRadius="full" variant="outline" colorScheme="blue">
                {rating}
              </Tag>
            </Wrap>
            <Text fontSize="3xl" fontWeight="bold">
              {name}
              <Emoji rating={rating_top} />
            </Text>
            <Flex justifyContent="space-between">
              <Text color="GrayText">Released: </Text>
              <Text color="GrayText">{released}</Text>
            </Flex>
          </Stack>
        </CardFooter>
      </Card>
    </Link>
  );
};
