import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import useVideos from '../hooks/useVideos'

const App = () => {
    const [videos, search] = useVideos('buildings')
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])


    return (
        <div className="ui container">
            <SearchBar onSubmit={search}/>
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