import React from 'react';
import VideoPreview from './VideoPreview'


class VideoList extends React.Component {
    render() {
        return (
            <div className="ui relax divided list">
                {this.props.videos.map((v) => <VideoPreview key={v.id.videoId} video={v} onClick={this.props.onClick}/>)}
            </div>
        );
    }
};

export default VideoList;