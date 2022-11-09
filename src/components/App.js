import React from "react";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";

class App extends React.Component{

  render(){
  return(
    <div className="ui container">
      <SearchBar />
      <VideoDetail />
      <VideoList />
    </div>
  )
  }
}

export default App;