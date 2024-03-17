import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import { ChildrenProps } from "src/types/Common";

export default ({ children }: ChildrenProps): JSX.Element => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const CHARACTERS_LIMIT = 300;

  if (children.length <= CHARACTERS_LIMIT) {
    return <Text>{children}</Text>;
  }

  const summary = !isExpanded
    ? children.substring(0, CHARACTERS_LIMIT) + "..."
    : children;

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        variant="ghost"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="teal"
        onClick={() => setExpanded((isExpanded) => !isExpanded)}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};
