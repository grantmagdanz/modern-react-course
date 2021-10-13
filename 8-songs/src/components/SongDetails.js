import React from 'react';
import { connect} from 'react-redux'

const SongDetails = ({ song }) => {
    if (!song) {
        return (
            <div>Please choose a song</div>
        )
    }
    return (
        <div>
            {song.title}
            <br />
            {song.duration}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);