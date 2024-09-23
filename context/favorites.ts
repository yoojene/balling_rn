import { createContext } from "react";

export const favourites = ["steph", "lebron"];

export const FavouritesContext = createContext(favourites);