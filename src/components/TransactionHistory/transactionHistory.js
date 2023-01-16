import React from 'react';
import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.history}>
    <thead>
      <tr className={styles.trHeadTable}>
        <th className={styles.thHeadTable}>Type</th>
        <th className={styles.thHeadTable}>Amount</th>
        <th className={styles.thHeadTable}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styles.trBodyTable}>
          <td className={styles.tdBodyTable}>{item.type}</td>
          <td className={styles.tdBodyTable}>{item.amount}</td>
          <td className={styles.tdBodyTable}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
