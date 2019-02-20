import React, { Component } from 'react';
import env from './env';
import Main from './Component/Main';
import MainContainer from './Container/MainContainer';

import configureStore from './Store/configureStore'
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {

    return (
      <div className="App">
      
        <MainContainer/>
 
      </div>
    );
  }
}

export default App;
