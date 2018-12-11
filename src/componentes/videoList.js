import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Image, Dimmer, Loader } from 'semantic-ui-react';
import { reproduzVideo } from '../store/actions/reproducao-actions';

class VideoList extends Component {

    renderVideo (video) {
        return (
            <List key={video.etag} animated verticalAlign='middle' >
                <List.Item onClick={this.props.reproduz(video)} >
                    <Image src={video.snippet.thumbnails.default.url} />
                    <List.Content>
                        <List.Header>{video.snippet.title}</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        )
    }

    render () {
        return (
            <div className="video-list">
                {
                    this.props.carregando && (
                    <Dimmer active inverted >
                        <Loader size='medium'>Carregando...</Loader>
                    </Dimmer>
                    )    
                }
                {
                    this.props.videos.map((video) => { 
                        return this.renderVideo(video);
                    })
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        videos: state.busca.videos,
        carregando: state.busca.carregando,
        erro: state.busca.erro
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reproduz: (video) => (event) => dispatch(reproduzVideo(video))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);