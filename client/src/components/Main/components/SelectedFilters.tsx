import { Button, Flex, Select } from "@chakra-ui/react";
import { CiFilter } from "react-icons/ci";
import { useShallow } from "zustand/react/shallow";
import useStore from "src/store";
import { orderings, platforms as plats } from "../data";

export default (): JSX.Element => {
  const { platforms, setPlatforms, ordering, setOrdering, resetFilters } =
    useStore(
      useShallow((state) => ({
        platforms: state.platforms,
        setPlatforms: state.setPlatforms,
        ordering: state.ordering,
        setOrdering: state.setOrdering,
        resetFilters: state.resetFilters,
      }))
    );

  return (
    <Flex gap="20px">
      <Select
        onChange={(e) => setPlatforms(e.target.value)}
        w="fit-content"
        variant="filled"
        placeholder="Platforms"
        value={platforms}
      >
        {plats.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
      <Select
        onChange={(e) => setOrdering(e.target.value)}
        w="fit-content"
        variant="filled"
        value={ordering}
      >
        {orderings.map(({ slug, name }) => (
          <option key={slug} value={slug}>
            Order by: {name}
          </option>
        ))}
      </Select>
      <Button onClick={() => resetFilters()}>
        Reset filters &nbsp; <CiFilter />
      </Button>
    </Flex>
  );
};
