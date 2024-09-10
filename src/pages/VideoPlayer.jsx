import React, { useEffect, useRef } from 'react';
import { Player } from '@oplayer/core';
import OUI from '@oplayer/ui';
import '@oplayer/ui/dist/index.css'; // Import OPlayer styles
import { useLocation } from 'react-router-dom';

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const query = new URLSearchParams(useLocation().search);
  
  const videoSrc = query.get('src'); // Get video URL from query parameter
  const title = query.get('title') || 'Untitled Video'; // Get title from query parameter
  const poster = query.get('poster') || 'https://via.placeholder.com/800x450?text=Poster'; // Default poster

  useEffect(() => {
    if (videoSrc && playerRef.current) {
      const player = Player.make(playerRef.current, {
        source: {
          title: title, // Set the title dynamically
          src: videoSrc, // Video source from query parameter
          poster: poster, // Poster from query parameter or default
        }
      })
        .use([OUI({
          theme: {
            watermark: {
              src: '/your/path/logo.jpg', // Customize the watermark
              style: {
                top: '10px',
                right: '10px',
                width: '100px',
                height: 'auto'
              },
              attrs: {
                class: 'watermark'
              }
            }
          }
        })])
        .create();

      return () => player.destroy(); // Clean up the player on unmount
    }
  }, [videoSrc, title, poster]);

  return (
    <div>
      <div ref={playerRef} style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default VideoPlayer;
