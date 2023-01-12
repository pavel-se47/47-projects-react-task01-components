import React from 'react';
import ReactDOM from 'react-dom/client';
import transactions from './transactions.json';
import TransactionHistory from 'components/transactionHistory';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransactionHistory items={transactions} />
  </React.StrictMode>
);
