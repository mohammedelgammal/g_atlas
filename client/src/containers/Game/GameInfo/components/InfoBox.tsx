import { List, ListItem, Stack, Tag, Text } from "@chakra-ui/react";
import { InfoBoxProps } from "src/types/Game";

export default ({ title, list }: InfoBoxProps): JSX.Element => {
  return (
    <Stack spacing={2} mb={5}>
      <Text color="gray" fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
      {list instanceof Array ? (
        <List>
          {list.length ? (
            list.map((name) => (
              <ListItem color="gray" key={name}>
                {name}
              </ListItem>
            ))
          ) : (
            <Text fontWeight="bolder">N/A</Text>
          )}
        </List>
      ) : (
        <Tag fontWeight="bolder" w="fit-content" colorScheme="teal">
          {list.length ? list : "N/A"}
        </Tag>
      )}
    </Stack>
  );
};
