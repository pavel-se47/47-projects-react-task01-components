import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';
import styles from './profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt={username} className="avatar" />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
