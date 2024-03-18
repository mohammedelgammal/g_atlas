import ApiClient from "./gameApiClient";
import { GenreType } from "src/types/Services";

export default new ApiClient<GenreType>("/genres");
