import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookmarkPage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBookmarks = () => {
      setLoading(true);
      const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
      setBookmarks(storedBookmarks);
      setLoading(false);
    };

    loadBookmarks();

    // Set up an event listener for storage changes
    window.addEventListener('storage', loadBookmarks);

    return () => {
      window.removeEventListener('storage', loadBookmarks);
    };
  }, []);

  const handleRemoveBookmark = (title) => {
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.title !== title);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Bookmarked Komik</h1>
      {loading ? (
        <p className="text-lg">Loading bookmarks...</p>
      ) : bookmarks.length === 0 ? (
        <p className="text-lg">No bookmarks found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bookmarks.map((bookmark) => (
            <div key={bookmark.title} className="border rounded-lg p-2">
              <img src={bookmark.thumbnail} alt={bookmark.title} className="w-full h-auto rounded-lg mb-2" />
              <Link to={`/komik/${bookmark.title}`} className="text-blue-600 hover:underline block">{bookmark.title}</Link>
              <button
                onClick={() => handleRemoveBookmark(bookmark.title)}
                className="mt-2 p-2 bg-red-500 text-white rounded"
              >
                Remove Bookmark
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarkPage;
