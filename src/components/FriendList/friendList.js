import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => (
  <ul key={friends.length} className={styles.list}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
