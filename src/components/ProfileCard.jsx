import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
import "./ProfileCard.css";
import "./data.css";

export default function ProfileCard(props) {
  // console.log(props.skillList);
  return (
    <div className="card">
      <Avatar imgPath={props.imagePath} imgAlt={props.imageName} />
      <div className="data">
        <Intro name={props.name} about={props.about} />
        <SkillList skillList={props.skillList} />
      </div>
    </div>
  );
}
