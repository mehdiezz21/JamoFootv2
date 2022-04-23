import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBookmarks from "./useBookmarks";

function Favoris() {
  const [usersFavoris, setFavorisState] = useState([]);
  const [bookmarks, toggleBookmark] = useBookmarks();

    useEffect(() => {
        setFavorisState(bookmarks)}, []
    )

  return (
      <div>
        {usersFavoris.map((user) => {
          return (
            user.id ?
                <div key={user?.id || Math.random()}>
                <Link to={`/team/${user?.id}`}>{user?.name}</Link>
                <button onClick={toggleBookmark(user?.id)}>
                    Retirer des favoris
                </button>
                </div>
            : null
          );
        })}
      </div>
  );
}

export default Favoris;