import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => { //instead of writing props, we can destructure it and just use "videos"
  //props.videos from parent(ie. App.js)
const renderedList = videos.map((video)=> {
  return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
})

  return(
    <div className="ui relaxed divided list">
    
    {renderedList}
    </div>
  )
}

export default VideoList;