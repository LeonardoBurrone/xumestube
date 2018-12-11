import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { buscaVideo } from '../store/actions/busca-actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        //Já inicia a aplicação com uma busca default para popular a lista de vídeos
        this.props.buscaVideo('React redux');
    }

    pesquisaTermo = event => {
        if (event.keyCode === 13) { //13: enter
            const termo = event.target.value;
            this.props.buscaVideo(termo); //Esse 'buscaVideo' é o do método 'mapDispatchToProps()'
        }
    }

    render () {
        return (
            <div className="search-bar">
                <Segment stacked>
                    <Input icon="search" onKeyDown={(event) => this.pesquisaTermo(event)} size="large" placeholder="Search..." />
                </Segment>
            </div>
        )
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        buscaVideo: (termo) => dispatch(buscaVideo(termo)) //O 'buscaVideo' que está no 'dispatch' é das 'Actions'
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);