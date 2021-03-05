import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <>
    {good || neutral || bad ? (
      <div className={s.options}>
        <span>Good:{good}</span>
        <span>Neutral:{neutral}</span>
        <span>Bad:{bad}</span>
        <span>
          Total:
          {countTotalFeedback}
        </span>
        <span>
          Positive feedback:
          {Math.floor(countPositiveFeedbackPercentage / countTotalFeedback)}%
        </span>
      </div>
    ) : (
      'No feedback given'
    )}
  </>
);
export default Statistics;
