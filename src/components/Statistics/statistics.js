import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const bgc = () => {
  const color = `rgb(
        ${getRandom(0, 255)},
        ${getRandom(0, 255)},
        ${getRandom(0, 255)})`;
  return color;
};

const getRandom = (min, max) => Math.ceil(Math.random() * (max - min) + min);

const Statistics = ({ title, stats, color }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.list}>
      {stats.map(statsItem => (
        <li
          className="item"
          key={statsItem.id}
          style={{ backgroundColor: bgc() }}
        >
          <span className={styles.label}>{statsItem.label}</span>
          <span className={styles.percentage}>{statsItem.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
