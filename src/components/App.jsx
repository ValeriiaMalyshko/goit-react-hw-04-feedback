import React, { useState } from 'react';
// import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setElement = e => {
    // const { good, neutral, bad } = e.target;

    switch (e) {
      case 'good':
        setGood(good + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      default:
        console.warn(`There is somesing wrong`);
    }
  };

  const total = good + neutral + bad;
  const feedbacks = Object.keys({ good, neutral, bad });
  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);

  return (
    <>
      <Section text="Please leave headback">
        <FeedbackOptions options={feedbacks} onLeaveFeedback={setElement} />
      </Section>
      {total > 0 ? (
        <Section text="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
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
