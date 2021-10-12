import React from 'react';
import SearchBar from './SearchBar'
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import youtube from '../api/youtube'


class App extends React.Component {
    state = { videos: [], selectedVideo: null}

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoClick = async (video) => {
        this.setState({ selectedVideo: video})
    }

    render() {

        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoPlayer video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onClick={this.onVideoClick}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default App;