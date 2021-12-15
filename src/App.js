import "./App.css";
import user from "./data/user.json";
import ProfileDescription from "./components/profile/ProfileDiscription";

function App() {
  return (
    <div className="App">
      <ProfileDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
    </div>
  );
}

export default App;
