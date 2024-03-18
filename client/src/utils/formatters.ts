import _ from "lodash";

export const getSelectedGenres = (genre: string) =>
  _.capitalize(genre).replace("-", " ") || "Games";
