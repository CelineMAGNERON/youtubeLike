import React from 'react';

export const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  console.log(video);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className='is-flex is-flex-direction-column'>
      <div className='is-flex is-justify-content-center'>
        <iframe title='video player' src={videoSrc} height='500' width='700' />
      </div>
      <div className=''>
        <h4 className='title is-4'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <span className='tag is-info'>{video.snippet.channelTitle}</span>
        <span className='ml-1 tag is-info'>
          Publié le {video.snippet.publishedAt}
        </span>
      </div>
    </div>
  );
};
