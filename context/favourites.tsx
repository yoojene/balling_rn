import React, { createContext, useContext, useReducer } from "react";
import { Favourite } from "./favourites.model";

type FavouritesContextType = {
  favourites: Favourite[];
};

type FavouritesActionType = {
  type: "ADD_FAVOURITE_PLAYER" | "REMOVE_FAVOURITE" | "ADD_FAVOURITE_TEAM";

  payload: Favourite;
};
export const initialFavourites: Favourite[] = [];

export const FavouritesContext = createContext<FavouritesContextType>(null!);
export const FavouritesDispatchContext = createContext<any>(null!);

export const favouritesReducer = (
  favourites: Favourite[],
  action: FavouritesActionType
) => {
  switch (action.type) {
    case "ADD_FAVOURITE_PLAYER": {
      return [
        ...favourites,
        {
          name: action.payload.name,
          number: action.payload.number,
          photo: action.payload.photo,
          position: action.payload.position,
          description: action.payload.description,
          isPlayer: true,
        },
      ];
    }
    case "REMOVE_FAVOURITE": {
      return favourites.filter((fav) => fav.name !== action.payload.name);
    }
    case "ADD_FAVOURITE_TEAM": {
      return [
        ...favourites,
        {
          name: action.payload.name,
          number: action.payload.number,
          photo: action.payload.photo,
          stadium: action.payload.stadium,
          description: action.payload.description,
          isPlayer: false,
        },
      ];
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  return context;
};

export const useFavouritesDispatch = () => {
  const context = useContext(FavouritesDispatchContext);
  return context;
};

export const FavouritesProvider: React.FC = ({ children }: any) => {
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    initialFavourites
  );
  return (
    <FavouritesContext.Provider value={{ favourites }}>
      <FavouritesDispatchContext.Provider value={dispatch}>
        {children}
      </FavouritesDispatchContext.Provider>
    </FavouritesContext.Provider>
  );
};
