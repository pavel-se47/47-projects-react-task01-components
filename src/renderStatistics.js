import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data.json';
import Statistics from 'components/Statistics/statistics';

// const bgc = () => {
//   const color = `rgb(
//         ${getRandom(0, 255)},
//         ${getRandom(0, 255)},
//         ${getRandom(0, 255)})`;
//   return color;
// };

// const getRandom = (min, max) => Math.ceil(Math.random() * (max - min) + min);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Statistics title="Upload stats" stats={data} />
  </React.StrictMode>
);
