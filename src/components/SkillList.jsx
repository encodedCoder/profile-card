import Skill from "./Skill";
import "./SkillList.css";

export default function SkillList(props) {
  return (
    <div className="skill-list">
      {props.skillList.map((skill, index) => {
        return <Skill skill={skill} key={index} />;
      })}
    </div>
  );
}
