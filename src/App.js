// import './App.css';
import ProfileCard from "./components/ProfileCard";
import { usersData } from "./usersData.js";

function App() {
  return (
    <ProfileCard
      name={usersData[0].name}
      about={usersData[0].about}
      imagePath={usersData[0].imagePath}
      imageName={usersData[0].imageName}
      skillList={usersData[0].skillList}
    />
  );
}

export default App;
