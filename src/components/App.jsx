import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setElement = element => {
    this.setState(prevState => ({ [element]: prevState[element] + 1 }));
  };

  countTotalFeedback = () => {
    const elements = Object.values(this.state);
    return elements.reduce((total, element) => total + element, 0);
  };

  render() {
    const feedbacks = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = Math.round(
      (this.state.good / total) * 100
    );

    return (
      <>
        <Section text="Please leave headback">
          <FeedbackOptions
            options={feedbacks}
            onLeaveFeedback={this.setElement}
          />
        </Section>
        {total > 0 ? (
          <Section text="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
