import React, { useState } from 'react';
import SearchBar from './SearchBar'
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import youtube from '../api/youtube'


const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    const onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }

    return (
        <div className="ui container">
            <SearchBar onSubmit={onSearchSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoPlayer video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onClick={setSelectedVideo}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default App;