import React from 'react';
import { VideoItem } from '../VideoItem';

export const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return (
    <div className='is-flex  is-flex-direction-column is-justify-content-center'>
      {renderedList}
    </div>
  );
};
