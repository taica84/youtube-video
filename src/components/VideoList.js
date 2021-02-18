import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList(props) {
     const renderedList = props.videosLength.map( video => (
         <VideoItem 
          key={video.id.videoId}
          video={video}
          onVideoSelect={props.onVideoSelect} />
     ));
      console.log(renderedList)
    return (
        <div className='ui relaxed divided list' >
            {renderedList}
        </div>
    )
}
