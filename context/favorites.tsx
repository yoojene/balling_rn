import React, { createContext, useContext, useReducer } from "react";

type FavouritesContextType = {
  favourites: string[];
};

type FavouritesActionType = {
  type: "ADD_FAVOURITE" | "REMOVE_FAVOURITE";
  payload: any;
};
export const initialFavourites = [];

export const FavouritesContext = createContext<FavouritesContextType>(null!);
export const FavouritesDispatchContext = createContext<any>(null!);

export const favouritesReducer = (
  favourites: string[],
  action: FavouritesActionType
) => {
  switch (action.type) {
    case "ADD_FAVOURITE": {
      return [...favourites, action.payload];
    }
    case "REMOVE_FAVOURITE": {
      return favourites.filter((fav) => fav !== action.payload);
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
