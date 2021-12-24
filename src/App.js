import './App.css';
import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <FeedbackOptions options={['good', 'neutral', 'bad']}></FeedbackOptions>
      </div>
    );
  };
};

