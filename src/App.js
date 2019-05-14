import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PostListPage from './components/PostListPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <PostListPage />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
