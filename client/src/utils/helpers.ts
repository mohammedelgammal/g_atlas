import _ from "lodash";
import { IconType } from "react-icons";

export const getRandomIcon = (iconsMap: IconType[]) =>
  _.take(_.shuffle(iconsMap), _.random(1, iconsMap.length));

export const getMainLoadingSkeleton = (length: number) =>
  Array.from({ length }, (v, i): number => (v ? i : i));
