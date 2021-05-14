import React from "react";
import SearchBar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import VideoTags from "./VideoTags";
import DisplayStoresTags from "./DisplayStoresTags";
import "./../style/videotag.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadTagFromLocalStorage } from "../utils/localStorage";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    videoTags: loadTagFromLocalStorage(),
  };
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log("this is resp", response);
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleVideoTags = (tags) => {
    this.setState({ videoTags: tags });
    console.log("apptag", tags);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "1em" }}>
        <SearchBar handleFormSubmit={this.handleSubmit} />
       
        <div className="row">
          <div className="col-xs-2 col-sm-2">
            {this.state.selectedVideo ? (
              <DisplayStoresTags
                video={this.state.selectedVideo}
                tags={this.state.videoTags}
                handleVideoTags={this.handleVideoTags}
              />
            ) : null}{" "}
          </div>
          <div className="col-xs-7 col-sm-6">
            <div className="eighteen wide column">
              <VideoDetail video={this.state.selectedVideo} />
              {this.state.selectedVideo ? (
                <VideoTags
                  video={this.state.selectedVideo}
                  handleVideoTags={this.handleVideoTags}
                />
              ) : null}
            </div>
          </div>
          <div className="col-xs-3 col-sm-4">
            {this.state.videos.length > 0 ? (
              <div className="eighteen wide column ui segment">
                <VideoList
                  handleVideoSelect={this.handleVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
