import React, { Component } from 'react';
import './App.css';
import Lister from './Lister';
import store from './store';
import { Provider } from 'react-redux';
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <Lister />
            <Footer />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
