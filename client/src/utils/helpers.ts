import _ from "lodash";
import { IconType } from "react-icons";
import { FiltersType } from "src/types/Services";

export const getRandomIcon = (iconsMap: IconType[]) =>
  _.take(_.shuffle(iconsMap), _.random(1, iconsMap.length));

export const getMainLoadingSkeleton = (length: number) =>
  Array.from({ length }, (v, i): number => (v ? i : i));

export const cleanUpFilters = (filters: FiltersType): FiltersType => {
  for (const key of Object.keys(filters))
    if (!filters[key as keyof FiltersType])
      delete filters[key as keyof FiltersType];
  return filters;
};
