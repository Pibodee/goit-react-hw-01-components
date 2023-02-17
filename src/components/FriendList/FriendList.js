import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { FriendsList } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (<FriendsList>
        {friends.map(friend => {
            return <FriendItem key={friend.id} friend={friend}></FriendItem>
        })}
    </FriendsList>)
}