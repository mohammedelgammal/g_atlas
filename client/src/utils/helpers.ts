import _ from "lodash";
import { IconType } from "react-icons";
import { Trailer } from "src/types/Game";
import { FiltersType, ResponseType, TrailerType } from "src/types/Services";

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

export const getScreenshotsLoadingSkeletons = (length: number) =>
  Array.from({ length }, (v, i): number => (v ? i : i));

export const getTrailer = (
  trailers: ResponseType<TrailerType> | undefined
): Trailer | null => {
  if (!trailers || !trailers.results.length) return null;
  const firstTrailer = trailers.results[0];
  return {
    src: firstTrailer.data[480].toString(),
    poster: firstTrailer.preview,
  };
};

export const getInfoLoadingSkeleton = (length: number) =>
  Array.from({ length }, (v, i): number => (v ? i : i));
