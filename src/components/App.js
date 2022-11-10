import React from "react";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends React.Component {
  state = {videos: []}
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params:{
        q:term
      }
    })
    this.setState({videos:response.data.items});
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} videos.
        <VideoDetail />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
