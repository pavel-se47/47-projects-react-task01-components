import React from 'react';
import ReactDOM from 'react-dom/client';
import friends from './friends.json';
import FriendList from 'components/friendList';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FriendList friends={friends} />
  </React.StrictMode>
);
