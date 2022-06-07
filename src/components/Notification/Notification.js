import React from 'react';
import propTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notification({ message }) {
  return <h2 className={s.text}>{message}</h2>;
}
Notification.propTypes = {
  message: propTypes.string.isRequired,
};
