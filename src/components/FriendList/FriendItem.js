import PropTypes from 'prop-types';
import { Friend, Avatar, Status, Nickname } from './FriendItem.styled';

export const FriendItem = ({
    friend: { avatar, name: nickname, isOnline },}) => { 
    return (
      <Friend>
        <Status online={isOnline}></Status>
        <Avatar src={avatar} alt={nickname} />
        <Nickname>{nickname}</Nickname>
      </Friend>
    );
}

FriendItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })
}