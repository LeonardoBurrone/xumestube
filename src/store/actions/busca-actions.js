import youtubeSearch from 'youtube-api-v3-search';
import YOUTUBE_API_KEY from '../../api';

//Apenas um loading para travar a tela
export const buscaVideoInicio = () => {
    return {
        type: 'BUSCA_VIDEO_INICIO',
        carregando: true,
        erro: false
    };
}

export const buscaVideoSucesso = (videos) => {
    return {
        type: 'BUSCA_VIDEO_SUCESSO',
        videos,
        carregando: false,
        erro: false
    };
}

export const buscaVideoErro = () => {
    return {
        type: 'BUSCA_VIDEO_ERRO',
        carregando: false,
        erro: true
    };
}

export const buscaVideo = (termo) => {
    return dispatch => {
        dispatch(buscaVideoInicio())
        youtubeSearch(YOUTUBE_API_KEY, {q: termo})
            .then((data) => dispatch(buscaVideoSucesso(data.items)))
            .catch(() => dispatch(buscaVideoErro()))
    };
}