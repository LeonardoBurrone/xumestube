import React from 'react';
import { connect } from 'react-redux';
import { Advertisement } from 'semantic-ui-react';

const VideoPlayer = props => {
    return (
        <div className="video-player">
            <Advertisement style={{'height': '433px'}} unit='top banner' test='Escolha um vídeo para reproduzir' />
        </div>
        
    )
};

const mapStateToProps = (state) => {
    return {
        video: state.reproduz.video
    }
}

export default connect(mapStateToProps, null)(VideoPlayer);