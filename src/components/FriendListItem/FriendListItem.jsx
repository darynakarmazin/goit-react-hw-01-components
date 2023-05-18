import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <span
            className={`${css.status} ${
              friend.isOnline ? css.online : css.offline
            }`}
          >
            {friend.isOnline}
          </span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.array.isRequired,
};
