import { Image } from "@chakra-ui/react";
import { EmojiProps } from "src/types/Main";
import { emojiMap } from "../../../data";

export default ({ rating }: EmojiProps) =>
  rating >= 3 ? <Image {...emojiMap[rating]} marginTop={1} /> : null;
