import React from 'react';
import VideoPreview from './VideoPreview'


const VideoList = ({ videos, onClick }) => {
    return (
        <div className="ui relax divided list">
            {videos.map((v) => <VideoPreview key={v.id.videoId} video={v} onClick={onClick}/>)}
        </div>
    );
};

export default VideoList;