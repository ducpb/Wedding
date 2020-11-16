import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

import Ex01 from './components/Ex01/Ex01';
import Ex02 from './components/Ex02';
import Ex03 from './components/Ex03';

import Footer from './components/Footer';
import Music from './components/Music';
import Ex07 from './components/Ex07';
import Ex06 from './components/Ex06';
import Ex04 from './components/Ex04';
import Ex05 from './components/Ex05';
const App = () => {
  return (
    <div className="App">
      <Header />
      <div id="content" className="site-content">
        <div className="home-page typography wow fadeIn" id="home-id" data-wow-duration="2s" data-wow-delay="1s">
          <Ex01 />
          <Music />

          <Ex02 />
          <Ex03 />

          <Ex04 />
          <Ex05 />

          <Ex06 />
          <Ex07 />
        </div>

        <div className="animation-loading"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;