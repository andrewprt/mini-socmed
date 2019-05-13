import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header'
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Homepage />
        </div>
      </div>
    );
  }
}

export default App;
