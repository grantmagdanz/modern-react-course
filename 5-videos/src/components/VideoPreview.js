import React from 'react';
import './VideoPreview.css'

class VideoPreview extends React.Component {

    onClick = () => {
        this.props.onClick(this.props.video)
    }
    
    render() {
        return (
            <div className="video-preview item" onClick={this.onClick}>
                <img alt={this.props.video.snippet.title} className="ui image" src={this.props.video.snippet.thumbnails.medium.url}/>
                <div className="content">
                    <div className="header">
                        {this.props.video.snippet.title}
                    </div>
                </div>
            </div>
        );
    }
};

export default VideoPreview;