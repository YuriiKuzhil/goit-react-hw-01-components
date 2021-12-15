import "./App.css";
import user from "./data/user.json";
import Profile from "./components/profile/Profile";
import ProfileDescription from "./components/profile/profileDescription/ProfileDiscription";
import ProfileStats from "./components/profile/profileStats/ProfileStats";
const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;
function App() {
  return (
    <div>
      <Profile>
        <ProfileDescription
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
        />
        <ProfileStats followers={followers} views={views} likes={likes} />
      </Profile>
    </div>
  );
}

export default App;
