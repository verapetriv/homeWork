import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={styles.friend__list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <li className={styles.item} key={id}>
                <span className={isOnline ? styles.status__online : styles.status__ofline}></span>
                <img className={styles.avatar} src={avatar} alt={name} width="48" />
                <p className={styles.name}>{name}</p>
            </li>
        ))}
    </ul>
)

FriendList.defaultProps = {
    avatar: 'https://bizraise.pro/wp-content/uploads/2014/09/no-avatar.png',
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default FriendList;