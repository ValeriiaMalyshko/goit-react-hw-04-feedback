import React from 'react';
import propTypes from 'prop-types';
import s from './Feedback.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(element => {
        return (
          <button
            className={s.btn}
            key={element}
            type="button"
            onClick={() => onLeaveFeedback(element)}
          >
            {element}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
