import { useEffect, useState } from "react";

function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    const ls = localStorage.getItem("bookmarks");
    if (ls) return JSON.parse(ls);
    else return [];
  });

  const toggleItemInLocalStorage = (obj) => () => {
    const array = [].concat(bookmarks.map((book) => book.id === obj?.id))
    const isBookmarked = array.includes(true);
    if (isBookmarked) setBookmarks((prev) => prev.filter((b) => b.id !== obj.id));
    else setBookmarks((prev) => [...prev, obj]);
  };

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return [bookmarks, toggleItemInLocalStorage];
}

export default useBookmarks;