import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ countGood, countNeutral, countBad }) => (
  <>
    <button className={s.button} type="button" onClick={countGood}>
      Good
    </button>
    <button className={s.button} type="button" onClick={countNeutral}>
      Neutral
    </button>
    <button className={s.button} type="button" onClick={countBad}>
      Bad
    </button>
  </>
);
FeedbackOptions.propTypes = {
  countGood: PropTypes.func.isRequired,
  countNeutral: PropTypes.func.isRequired,
  countBad: PropTypes.func.isRequired,
};
export default FeedbackOptions;
