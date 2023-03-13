import React, { Component } from 'react';
import { Notifications } from './Notifications/Notifications';
import { Statistics } from './Statistics/Statistics';
import css from './style.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedbackGood = () => {
    this.setState(state => ({ good: state.good + 1 }));
  };

  addFeedbackNeutral = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  };

  addFeedbackBad = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage =
      this.countTotalFeedback() === 0
        ? 0
        : (this.state.good / this.countTotalFeedback()) * 100;
    return Number(percentage.toFixed(1));
  }
    

  render() {
    return (
      <div className={css.feedback}>
        <h1 className={css.title}>{'Please leave feedback'}</h1>
        <ul className={css.feedbackList}>
          <li className={css.feedbackItem}>
            <button className={css.feedbackButton}
              onClick={this.addFeedbackGood}>Good</button>
          </li>
          <li className={css.feedbackItem}>
            <button className={css.feedbackButton}
              onClick={this.addFeedbackNeutral}>Neutral</button>
          </li>
          <li className={css.feedbackItem}>
            <button className={css.feedbackButton}
              onClick={this.addFeedbackBad}>Bad</button>
          </li>
        </ul>
        {this.countTotalFeedback() === 0
          ? (<Notifications/>)
          : (<Statistics
            statisticsTitle={'Statistics'}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()} />
          )}
      </div>
    );
  }


};

