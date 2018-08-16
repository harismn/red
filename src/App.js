import React, { Component } from 'react';
import './App.css';
import Lister from './Lister';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      
      <Provider store={store}>
      <div className="App">
        <Lister />
      </div>
      </Provider>
      
    );
  }
}

export default App;
