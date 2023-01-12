import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>

    <ul className="stat-list">
      {stats.map(statsItem => (
        <li className="item" key={statsItem.id}>
          <span className="label">{statsItem.label}</span>
          <span className="percentage">{statsItem.percentage}</span>
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
