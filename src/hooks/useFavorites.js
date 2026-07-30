import { useState } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  function isFavorite(id) {
    return favorites.includes(id);
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}

export default useFavorites;
