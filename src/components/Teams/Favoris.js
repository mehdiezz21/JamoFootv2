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
      <div className="corps">
        {usersFavoris.map((user) => {
          return (
            user.id ?
                <tr key={user?.id || Math.random()}>
                <td><Link to={`/team/${user?.id}`}>{user?.name}</Link></td>
                <td><button className="btn btn-danger" onClick={toggleBookmark(user?.id)}>
                    Retirer des favoris
                </button></td>
                </tr>
            : null
          );
        })}
      </div>
  );
}

export default Favoris;