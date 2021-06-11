import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
    <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
            <li className="item" key={id}>
                <span className={isOnline ? "status-online" : "status-ofline"}></span>
                <img className="avatar" src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
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