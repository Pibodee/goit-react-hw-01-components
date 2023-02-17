import { Profile } from 'components/user/Profile';
import user from '../data/user'
import { Statistics } from 'components/statistics/Statistics';
import data from '../data/data'

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile user={user} />
      <Statistics stats={data} />
    </div>
  );
};
