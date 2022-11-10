import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos}) => { //instead of writing props, we can destructure it and just use "videos"
  //props.videos from parent(ie. App.js)
const renderedList = videos.map((video)=> {
  return <VideoItem key={video.id} video={video}/>
})

  return(
    <div>
    
    {renderedList}
    </div>
  )
}

export default VideoList;