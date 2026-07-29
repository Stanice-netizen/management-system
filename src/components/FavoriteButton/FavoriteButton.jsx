function FavoriteButton({
  courseId,
  toggleFavorite,
  isFavorite,
}) {
  return (
    <button
      className="favorite-btn"
      onClick={() => toggleFavorite(courseId)}
    >
      {isFavorite(courseId) ? "Favorited" : "Favorite"}
    </button>
  );
}

export default FavoriteButton;