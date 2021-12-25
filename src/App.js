import './App.css';
import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

export default class App extends Component {
  state = {
    'good': 0,
    'neutral': 0,
    'bad': 0
  };

  handleFeedbackAdd = (event) => {
    event.preventDefault();
    const feedbakClick = event.currentTarget.name; 
    this.setState((prevState)=> {
       return {[feedbakClick]: prevState[feedbakClick] + 1} ;
    })
  };

  countTotalFeedback() {
      const {good, neutral, bad} = this.state;
      return (good + neutral + bad);
  };

  countPositiveFeedbackPercentage() {
      const {good, neutral, bad} = this.state;
      return Math.round(100 * good / (good + neutral + bad));
  };


  render () {
    const {good, neutral, bad} = this.state;

    return (
      <div className="App">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedbackAdd}></FeedbackOptions>
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
      </div>
    );
  };
};

