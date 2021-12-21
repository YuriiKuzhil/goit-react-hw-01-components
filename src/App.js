import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import Profile from "./components/profile/Profile";
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
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
