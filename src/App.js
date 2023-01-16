import React from 'react';
import Container from './components/GeneralContainer/generalContainer';
import Profile from './components/Profile/profile';
import Statistics from './components/Statistics/statistics';
import FriendList from './components/FriendList/friendList';
import TransactionHistory from './components/TransactionHistory/transactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};

export default App;
