import { Profile } from 'components/user/Profile';
import user from '../data/user'
import { Statistics } from 'components/statistics/Statistics';
import data from '../data/data'
import { FriendList } from 'components/FriendList/FriendList';
import friends from '../data/friends';
import { TransactionTable } from './TransactionHistory/TransactionTable';
import transactions from '../data/transactions';


export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionTable rows={transactions} />
    </div>
  );
};
