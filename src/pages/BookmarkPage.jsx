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
        <p>Loading bookmarks...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bookmarks.length === 0 ? (
            <p>No bookmarks found.</p>
          ) : (
            bookmarks.map((bookmark) => (
              <div key={bookmark.title} className="border rounded-lg p-4">
                <img src={bookmark.thumbnail} alt={bookmark.title} className="w-full h-auto rounded-lg mb-2" />
                <Link to={bookmark.link} className="text-blue-600 hover:underline block mb-2">{bookmark.title}</Link>
                <button
                  onClick={() => handleRemoveBookmark(bookmark.title)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Remove Bookmark
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default BookmarkPage;
