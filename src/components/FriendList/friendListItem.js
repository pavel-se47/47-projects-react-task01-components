import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';
// import StatusCheck from './statusCheck';
import styles from './friendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    {/* <StatusCheck isOnline={isOnline} /> */}
    <span className={!isOnline ? styles.status : styles.online}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
