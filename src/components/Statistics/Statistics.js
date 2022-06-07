import React from 'react';
import propTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p className={s.item}>Good : {good}</p>
      <p className={s.item}>Neutral : {neutral}</p>
      <p className={s.item}>Bad : {bad}</p>
      <p className={s.item}>Total : {total}</p>
      <p className={s.item}>
        {positivePercentage > 0
          ? `Positive feedback: ${positivePercentage}%`
          : 'No positive feedback'}
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
