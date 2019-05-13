import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Homepage />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
