import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import Profile from "./components/profile/Profile";
import ProfileDescription from "./components/profile/profileDescription/ProfileDiscription";
import ProfileStats from "./components/profile/profileStats/ProfileStats";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friendList/FriendList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import { Container } from "./App.styled";

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

function App() {
  return (
    <Container>
      <Profile>
        <ProfileDescription
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
        />
        <ProfileStats followers={followers} views={views} likes={likes} />
      </Profile>
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
