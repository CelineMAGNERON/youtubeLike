import React from 'react';
import './VideoItem.css';

export const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className='is-flex is-justify-content-center is-align-items-center box'
    >
      <div>
        <figure className='image is-128x128'>
          <img
            className='is-rounded'
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url}
          />
        </figure>
      </div>
      <div className='ml-2'>
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};
