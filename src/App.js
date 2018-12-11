import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';

import store from './store';
import SearchBar from './componentes/searchBar';
import VideoList from './componentes/videoList';
import VideoPlayer from './componentes/videoPlayer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <SearchBar />
          <VideoList />
          <VideoPlayer />
        </div>
      </Provider>
    );
  }
}

export default App;
