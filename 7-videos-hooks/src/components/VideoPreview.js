import React from 'react';
import './VideoPreview.css'

const VideoPreview = ({ video, onClick }) => {

    return (
        <div className="video-preview item" onClick={() => onClick(video)}>
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoPreview;